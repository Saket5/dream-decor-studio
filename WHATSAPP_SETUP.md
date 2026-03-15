# WhatsApp Business API Setup Guide

## Step 1: Create a Meta Business Account

1. Go to [Meta Business Suite](https://business.facebook.com)
2. Create or use existing Meta Business Account
3. Set up WhatsApp Business Account

## Step 2: Get WhatsApp Business Account Credentials

1. Go to [WhatsApp Manager](https://www.whatsapp.com/business/account)
2. Create a WhatsApp Business Account
3. Get your:
   - **Phone Number ID**: Your WhatsApp phone number identifier
   - **Business Account ID**: Your WhatsApp Business Account ID
   - **Access Token**: Generate from your Meta App

## Step 3: Create Meta App for API Access

1. Go to [Meta Developers](https://developers.facebook.com)
2. Create a new app
3. Select "Business" as app type
4. Add "WhatsApp" product
5. Go to Settings → Basic and get:
   - App ID
   - App Secret
6. Go to Messenger API → Token and generate **User Access Token**

## Step 4: Set Environment Variables

Create `.env.local` in your project root:

```env
# WhatsApp Business API Credentials
WHATSAPP_BUSINESS_ACCOUNT_ID=your_business_account_id
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
WHATSAPP_ACCESS_TOKEN=your_access_token
```

## Step 5: Add Your Business Phone Numbers

In Meta App → WhatsApp section:

- Add your verified phone number
- Add phone numbers of users who will receive messages (in sandbox mode)

## Step 6: Create WhatsApp Message Templates

### For Catalogue Template (Optional)

1. Go to WhatsApp Manager
2. Message Templates → Create Template
3. Create template named `catalogue_request` with:

```
Name: catalogue_request
Language: English
Category: MARKETING
Body:
Hello {{1}}!

Thank you for your interest in our {{2}} catalogue from Dream Decor Studio!

Our team will send you the detailed {{3}} shortly.

Best regards,
Dream Decor Studio Team
```

Header: (Leave empty or add your company name)
Footer: Dream Decor Studio

## Step 7: Deploy to Vercel

1. Add environment variables to Vercel:
   - Go to your Vercel project → Settings → Environment Variables
   - Add all three variables from Step 4

2. Deploy your changes:

```bash
git add .
git commit -m "Add WhatsApp Business API integration"
git push
```

## Verify Setup

After deployment:

1. Go to your website
2. Click "Request Catalogue" on any product
3. Fill in the form with a verified phone number
4. Submit - you should receive a WhatsApp message

## Troubleshooting

| Issue                        | Solution                                                |
| ---------------------------- | ------------------------------------------------------- |
| "Server configuration error" | Check environment variables are correctly set in Vercel |
| "Failed to send message"     | Verify phone number includes country code               |
| Message not received         | Check phone number is added to sandbox in Meta App      |
| "Invalid access token"       | Regenerate token from Meta App                          |

## API Endpoints Created

### Send Message via WhatsApp

- **Endpoint**: `/api/send-whatsapp-message`
- **Method**: POST
- **Body**:

```json
{
  "phoneNumber": "+919876543210",
  "catalogueName": "PVC Panels",
  "customerName": "John Doe",
  "catalogueUrl": "https://example.com/catalogue.pdf" // Optional
}
```

### Send Template Message (Optional)

- **Endpoint**: `/api/send-whatsapp-catalogue`
- **Method**: POST
- **Body**: Same as above

## Cost Estimation

WhatsApp Business API pricing:

- **Session Messages**: First message to customer (free)
- **Reply Messages**: Customer replies to your message (free)
- **Notification Messages**: $0.0075-$0.1 per message depending on region

## References

- [WhatsApp Business API Docs](https://developers.facebook.com/docs/whatsapp/cloud-api/reference)
- [Meta Graph API](https://developers.facebook.com/docs/graph-api)
- [WhatsApp Message Templates](https://developers.facebook.com/docs/whatsapp/message-templates)
