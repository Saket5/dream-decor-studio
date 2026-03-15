# WhatsApp Integration - Quick Reference

## What Was Implemented

### ✅ Two API Routes Created

1. **`/api/send-whatsapp-message`** (Recommended - Simpler)
   - Sends formatted text message
   - No template approval needed
   - Works immediately after setup
   - Shows custom branding
2. **`/api/send-whatsapp-catalogue`** (Advanced)
   - Uses message templates
   - Requires template approval from Meta
   - More professional formatting
   - Category-based pricing

### ✅ Updated Catalogues Component

- Integrated WhatsApp API calling
- Loading states with spinner
- Error handling with user feedback
- Toast notifications
- Phone number validation

## Quick Setup (5 Minutes)

### 1. Get Meta Credentials

```
1. Visit: https://business.facebook.com
2. Create or go to Business Account
3. Add WhatsApp Business Account
4. Note: Business Account ID, Phone Number ID
5. Create Meta App and generate Access Token
```

### 2. Add Environment Variables (Vercel)

Edit `.env.local`:

```env
WHATSAPP_BUSINESS_ACCOUNT_ID=YOUR_ID
WHATSAPP_PHONE_NUMBER_ID=YOUR_PHONE_ID
WHATSAPP_ACCESS_TOKEN=YOUR_TOKEN
```

### 3. Deploy

```bash
git add .
git commit -m "Add WhatsApp API integration"
git push
```

### 4. Test

1. Open Catalogues page
2. Click "Request Catalogue"
3. Enter verified phone number
4. Submit - Check WhatsApp!

## How It Works

```
User Form → API Route → WhatsApp API → User's Phone
     ↓            ↓                ↓
Phone,        Validates    Sends Real
Name,      & Formats      WhatsApp
Catalogue                    Message
```

## Features

✅ **Automated Sending** - Instant delivery
✅ **Error Handling** - Clear error messages
✅ **Phone Validation** - Checks format
✅ **Loading States** - UX feedback
✅ **Secure** - Keys on server only
✅ **Scalable** - Handles many requests

## File Structure

```
src/pages/
├── api/
│   ├── send-whatsapp-message.ts (Main - Recommended)
│   └── send-whatsapp-catalogue.ts (Optional - Templates)
└── Catalogues.tsx (Updated)

Root/
├── WHATSAPP_SETUP.md (Detailed setup guide)
├── WHATSAPP_QUICK_REFERENCE.md (This file)
└── .env.local.example (Template for env vars)
```

## Next Steps

1. ✅ Read `WHATSAPP_SETUP.md` for detailed instructions
2. ✅ Get credentials from Meta
3. ✅ Add to `.env.local`
4. ✅ Deploy to Vercel
5. ✅ Test with your phone number

## Troubleshooting

| Problem                      | Fix                                   |
| ---------------------------- | ------------------------------------- |
| "Server configuration error" | Check Vercel env variables            |
| Message not sent             | Verify phone number with country code |
| 404 on API                   | Ensure files in `src/pages/api/`      |
| Token expired                | Regenerate from Meta Developers       |

## Support Resources

- [WhatsApp Docs](https://developers.facebook.com/docs/whatsapp/)
- [Meta Graph API](https://developers.facebook.com/docs/graph-api)
- [Error Codes](https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes)

## Pricing

**WhatsApp Business API** (Meta Official)

- First message to user: Free
- User reply: Free
- Follow-up messages: $0.01-$0.1 per message (by region)
- One-time setup: Free

**Current Monthly Cost Estimate**: $0 - $50 (depending on volume)
