# Deployment Checklist - WhatsApp Integration

## Pre-Deployment (1 Hour)

### Step 1: Meta Business Account Setup (20 min)

- [ ] Go to [business.facebook.com](https://business.facebook.com)
- [ ] Sign in with your Facebook account
- [ ] Create or access existing Business Account
- [ ] Add WhatsApp Business Account if not already added
- [ ] Navigate to Settings → Business Info
- [ ] **Copy and save: Business Account ID** (you'll need this)

### Step 2: Get WhatsApp Credentials (20 min)

- [ ] Go to [Meta Developers](https://developers.facebook.com/)
- [ ] Select or create your App
- [ ] Navigate to WhatsApp section
- [ ] Go to API Setup
- [ ] Under "Phone Numbers", find your WhatsApp number
- [ ] **Copy: Phone Number ID**
- [ ] Go to Settings → Basic
- [ ] **Copy: App Token** (click Generate if needed)
- [ ] Save these 3 values:
  ```
  WHATSAPP_BUSINESS_ACCOUNT_ID = ________________
  WHATSAPP_PHONE_NUMBER_ID = ________________
  WHATSAPP_ACCESS_TOKEN = ________________
  ```

### Step 3: Local Testing (10 min)

- [ ] Create `.env.local` file in project root:
  ```env
  WHATSAPP_BUSINESS_ACCOUNT_ID=your_id_here
  WHATSAPP_PHONE_NUMBER_ID=your_phone_id_here
  WHATSAPP_ACCESS_TOKEN=your_token_here
  ```
- [ ] Start dev server: `bun run dev`
- [ ] Open http://localhost:5173/
- [ ] Go to Catalogues page
- [ ] Test with your own phone number (must include country code: +91...)
- [ ] Check your phone - you should receive the message!

### Step 4: Prepare for Vercel Deployment (10 min)

- [ ] Ensure all changes committed to git:
  ```bash
  git add .
  git commit -m "Add WhatsApp Business API integration"
  ```
- [ ] Push to GitHub:
  ```bash
  git push origin main
  ```

---

## Deployment to Vercel (15 Minutes)

### Step 5: Set Environment Variables in Vercel

- [ ] Go to [Vercel Dashboard](https://vercel.com/dashboard)
- [ ] Select your project (`dream-decor-studio`)
- [ ] Click **Settings** → **Environment Variables**
- [ ] Add three new variables:

  **Variable 1:**
  - Name: `WHATSAPP_BUSINESS_ACCOUNT_ID`
  - Value: [your Business Account ID]
  - Environments: Production, Preview, Development
  - Click Add

  **Variable 2:**
  - Name: `WHATSAPP_PHONE_NUMBER_ID`
  - Value: [your Phone Number ID]
  - Environments: Production, Preview, Development
  - Click Add

  **Variable 3:**
  - Name: `WHATSAPP_ACCESS_TOKEN`
  - Value: [your Access Token]
  - Environments: Production, Preview, Development
  - Click Add

- [ ] Verify all 3 variables appear in the list
- [ ] Screenshot or document these (for future reference)

### Step 6: Redeploy to Apply Variables

- [ ] In Vercel dashboard, go to **Deployments**
- [ ] Find the latest deployment
- [ ] Click the **3-dot menu** → **Redeploy**
- [ ] Wait for build to complete (2-3 minutes)
- [ ] Check deployment status - should say "Ready"

### Step 7: Verify Production Deployment

- [ ] Open your Vercel production URL
- [ ] Navigate to Catalogues page
- [ ] Test with a valid phone number
- [ ] Verify message arrives on your phone
- [ ] ✅ If message received, deployment successful!

---

## Post-Deployment (Ongoing)

### Monitoring

- [ ] Set up alerts for API failures (optional)
- [ ] Monitor Vercel function logs regularly
- [ ] Track message delivery rates
- [ ] Set up error monitoring (Sentry/LogRocket optional)

### Maintenance

- [ ] Token expires every 60 days:
  - [ ] Set calendar reminder to regenerate
  - [ ] Regenerate at Meta Developers
  - [ ] Update in Vercel → Environment Variables
  - [ ] No redeploy needed (updates immediately)

- [ ] Monitor quota usage:
  - [ ] Sandbox: 1,000 messages/day
  - [ ] Check Meta App → Logs for usage

### Optional Future Enhancements

- [ ] Create WhatsApp message templates (see [API_ROUTES_COMPARISON.md](API_ROUTES_COMPARISON.md))
- [ ] Switch to template-based API for better compliance
- [ ] Set up webhooks for delivery status
- [ ] Add analytics dashboard
- [ ] Implement message queue for high volume

---

## Troubleshooting During Deployment

| Issue                                | Solution                                                                |
| ------------------------------------ | ----------------------------------------------------------------------- |
| "Environment variables not found"    | Ensure all 3 variables added to Vercel. Redeploy after adding.          |
| Message not sent but API returns 200 | Check Vercel logs. May be sandbox phone number issue.                   |
| "Invalid token" error                | Token expires after 60 days. Regenerate from Meta Developers.           |
| Build fails after deployment         | Check Vercel Build Logs for compilation errors.                         |
| Message takes 10+ seconds            | Normal (WhatsApp API 100-200ms + network). Consider async queue for UX. |

---

## Rollback Plan

If something goes wrong after deployment:

1. **Temporarily disable API calls** (instant fix):
   - Edit `Catalogues.tsx` to disable form
   - Comment out the fetch call
   - Deploy

2. **Revert environment variables**:
   - Go to Vercel → Settings → Environment Variables
   - Remove the 3 WhatsApp variables
   - Redeploy (forms will error but won't crash)

3. **Revert code**:
   ```bash
   git revert HEAD
   git push
   ```

   - Vercel auto-deploys from git

---

## Success Criteria ✅

You'll know it's working when:

- [ ] API route returns HTTP 200
- [ ] Response includes message ID: `{ messages: [{ id: "wamid..." }] }`
- [ ] User receives WhatsApp message within 5 seconds
- [ ] Error messages show in toast if phone number invalid
- [ ] Loading spinner shows while sending
- [ ] Form clears after successful send
- [ ] Multiple messages send without duplications
- [ ] Works on both desktop and mobile Catalogues page

---

## Current Status Summary

| Item                  | Status                      |
| --------------------- | --------------------------- |
| Code                  | ✅ Ready                    |
| API Routes            | ✅ Created                  |
| Components            | ✅ Updated                  |
| Documentation         | ✅ Complete                 |
| Local Testing         | ⏳ Pending your credentials |
| Environment Setup     | ⏳ Pending                  |
| Production Deployment | ⏳ Pending                  |
| User Testing          | ⏳ Pending                  |

---

## Files You'll Need

- [WHATSAPP_SETUP.md](WHATSAPP_SETUP.md) - Detailed setup instructions
- [WHATSAPP_QUICK_REFERENCE.md](WHATSAPP_QUICK_REFERENCE.md) - Quick reference guide
- [API_ROUTES_COMPARISON.md](API_ROUTES_COMPARISON.md) - API endpoint comparison
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Common issues & solutions
- `.env.local` - Local environment variables
- `.env.local.example` - Template (don't edit)

---

## Next Immediate Actions

1. **TODAY**: Follow Steps 1-4 above (2 hours total)
2. **TOMORROW**: Deploy to Vercel (Step 5-7, 15 minutes)
3. **THEN**: Monitor and enjoy! 🎉

---

**Estimated Total Time**: ~2.5 hours (mostly waiting for Meta approvals)

Need help? Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) or refer to [WHATSAPP_SETUP.md](WHATSAPP_SETUP.md) for detailed steps.
