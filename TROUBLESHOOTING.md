# WhatsApp API Integration - Troubleshooting Guide

## Common Issues & Solutions

### 🔴 Issue: "Invalid access token"

**Error Message:**

```
Error: Invalid access token
Status: 400
```

**Root Causes:**

- Token expired (valid for 60 days)
- Token never generated properly
- Wrong environment variable name

**Solutions:**

1. **Check Environment Variables**

   ```bash
   # In .env.local
   WHATSAPP_ACCESS_TOKEN=your_token_here
   ```

   Verify spelling matches exactly (case-sensitive):

   ```
   ❌ WHATSAPP_TOKEN
   ❌ ACCESS_TOKEN
   ✅ WHATSAPP_ACCESS_TOKEN
   ```

2. **Regenerate Token**
   - Go to [Meta Developers](https://developers.facebook.com/)
   - Select your App
   - Navigate to Settings → Basic
   - Click "Generate" next to App Token
   - Copy the full token (don't trim spaces)

3. **Verify in Vercel**
   - Go to Vercel Project → Settings → Environment Variables
   - Confirm all 3 variables are set:
     - `WHATSAPP_BUSINESS_ACCOUNT_ID`
     - `WHATSAPP_PHONE_NUMBER_ID`
     - `WHATSAPP_ACCESS_TOKEN`
   - Redeploy after adding/updating

---

### 🔴 Issue: "Phone number not recognized"

**Error Message:**

```
Error: Phone number must be in E.164 format
Status: 400
```

**Root Causes:**

- Missing country code
- Wrong format (+91 vs 0091)
- Unsupported characters

**Solutions:**

1. **Use E.164 Format** (Required)

   ```
   ✅ +919876543210 (India)
   ✅ +14155552671 (USA)
   ❌ 9876543210 (missing country code)
   ❌ 0091 9876543210 (wrong format)
   ```

2. **Test with Sandbox**
   - For testing, use verified numbers from Meta App
   - Go to Meta App → WhatsApp → Sandbox Settings
   - Add test numbers there first
3. **Format Multiple Variants**
   - User enters: `9876543210`
   - App should convert to: `+919876543210`

   **In Catalogues.tsx**, add formatting:

   ```typescript
   let formatted = phoneNumber.trim();
   // Add country code if missing
   if (!formatted.startsWith("+")) {
     if (formatted.startsWith("0")) {
       formatted = formatted.slice(1);
     }
     formatted = "+91" + formatted;
   }
   ```

---

### 🔴 Issue: "Invalid phone number ID"

**Error Message:**

```
Error: Invalid phone number ID
Status: 404
```

**Root Causes:**

- Wrong Phone Number ID copied
- ID from wrong WhatsApp number
- ID not associated with Business Account

**Solutions:**

1. **Find Correct Phone Number ID**
   - Go to [Meta Developers](https://developers.facebook.com/)
   - Select App → WhatsApp → API Setup
   - Under "Phone Number", find the ID
   - Should look like: `102234567890123`

2. **Verify Association**
   - In Meta App Manager:
     - WhatsApp → Accounts → Select Business Account
     - Phone Numbers → View ID next to your number
3. **Triple-Check in Vercel**
   - Environment variable: `WHATSAPP_PHONE_NUMBER_ID`
   - Copy-paste directly (no typos!)
   - Redeploy after updating

---

### 🔴 Issue: Message sent but not received

**What Happened:**

- API returned 200 OK
- But user didn't get WhatsApp message

**Root Causes:**

- User number not verified in sandbox
- Sandbox test window closed (24-hour limit)
- Number belongs to someone else

**Solutions:**

1. **For Development/Testing**
   - Use only verified phone numbers
   - In Meta App → WhatsApp → Sandbox Settings
   - Add your test numbers explicitly
   - Both sender and receiver must be in sandbox

2. **Check Sandbox Time Window**
   - Sandbox messages expire after 24 hours
   - After user replies, window extends another 24 hours
   - For production, need production account approval

3. **Verify Permission**
   - Confirm phone number is yours
   - Confirm WhatsApp account is set up
   - Confirm no blocking/filtering active

4. **Check API Response**
   - API returns message ID if successful:
   ```json
   {
     "messages": [
       {
         "id": "wamid.xxx..."
       }
     ]
   }
   ```

   - If you got back an ID but no message, check with Meta support

---

### 🔴 Issue: "Business Account ID mismatch"

**Error Message:**

```
Error: Business Account ID doesn't match phone number
Status: 403
```

**Root Causes:**

- Phone number added to wrong Business Account
- Using Business Account ID from different account

**Solutions:**

1. **Verify Phone Number Ownership**
   - Go to Business Manager → Phone Numbers
   - Find your WhatsApp phone number
   - Check which Business Account it's assigned to
   - Use that Business Account's ID

2. **Find Correct Business Account ID**
   - Business Manager → Settings → Business Info
   - Copy Business Account ID (starts with numbers)
   - Should look like: `1234567890123456`

3. **Update Environment Variable**
   ```env
   WHATSAPP_BUSINESS_ACCOUNT_ID=copy_from_business_info
   ```

---

### 🟡 Issue: "Slow response time"

**Problem:**

- API takes 3-5 seconds to respond
- User sees loading spinner for too long

**Solutions:**

1. **Check API Route Performance**
   - Add timing logs:

   ```typescript
   console.time("whatsapp-api");
   // ... API call ...
   console.timeEnd("whatsapp-api");
   ```

2. **Optimize Network**
   - Meta API usually responds in 100-200ms
   - If slower, check your network
   - Use Vercel analytics to debug

3. **Consider Webhook** (Advanced)
   - Set up asynchronous confirmation
   - Send message via queue
   - Notify user immediately, process in background

---

### 🟡 Issue: Rate limiting

**Error Message:**

```
Error: Too many requests
Status: 429
```

**Root Causes:**

- Sending same message repeatedly
- Testing with multiple requests at once
- Exceeding Meta's rate limits

**Solutions:**

1. **Add User-Side Throttling**

   ```typescript
   let lastSentTime = 0;
   const THROTTLE_MS = 5000; // 5 seconds

   if (Date.now() - lastSentTime < THROTTLE_MS) {
     toast.error("Please wait before sending again");
     return;
   }
   ```

2. **Implement Request Debouncing**

   ```typescript
   const handleSubmit = debounce(async (data) => {
     // Send to API
   }, 1000);
   ```

3. **Known Rate Limits**
   - Sandbox: 1,000 messages/day per number
   - Business (Starter): 1,000 msg/day
   - Production: Scales with business needs
   - Per-phone limit: ~60 messages/minute

---

### 🟢 Issue: Messages being marked as spam

**Problem:**

- Messages delivered but marked as spam
- Users reporting as unwanted

**Solutions:**

1. **Follow WhatsApp Best Practices**
   - ✅ Only send to users who requested it
   - ✅ Include company name in message
   - ✅ Keep messages under 1024 characters
   - ✅ Format numbers with country codes
   - ❌ Don't send same message repeatedly to different users in short time

2. **Use Templates for Business**
   - Templates go through Meta review
   - Reduces spam classification
   - Better compliance = better delivery

3. **Monitor Message Feedback**
   - Set up webhooks to receive delivery status
   - Track mark_as_spam events
   - Adjust messaging as needed

---

## Debugging Checklist

When integrating, test in this order:

- [ ] Environment variables set (3 required)
- [ ] Credentials correct (copy-pasted from Meta)
- [ ] Phone number in E.164 format (+country code)
- [ ] API route file exists: `src/pages/api/send-whatsapp-message.ts`
- [ ] Test locally with `.env.local`
- [ ] Deploy to Vercel
- [ ] Set environment variables in Vercel dashboard
- [ ] Test in production with Vercel URL
- [ ] Check browser console for errors
- [ ] Check Vercel function logs for API errors
- [ ] Monitor WhatsApp status in Vercel logs
- [ ] Verify message received on phone

---

## Getting Help

### Check These First

1. **Vercel Function Logs**
   - Vercel Dashboard → Functions → View logs
   - Shows exact error from API

2. **Browser Console**
   - F12 → Console tab
   - Shows front-end errors

3. **Meta Developers Console**
   - Tools → Log Viewer
   - Shows what Meta API received

### If Still Stuck

1. Check [Meta WhatsApp Docs](https://developers.facebook.com/docs/whatsapp/)
2. Search [WhatsApp Error Codes](https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes)
3. Check your Meta App → API Reference for detailed docs

---

## Local Testing Without Credentials

To test component UI before getting credentials:

```typescript
// In Catalogues.tsx, temporarily mock the API:
const mockResponse = await new Promise((resolve) =>
  setTimeout(() => resolve({ ok: true }), 1000),
);

// Replace actual fetch with mock during development
```

This lets you test the UI/UX before API setup is done.
