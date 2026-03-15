# WhatsApp API Routes - Feature Comparison

## Side-by-Side Comparison

| Feature                   | `send-whatsapp-message`   | `send-whatsapp-catalogue`           |
| ------------------------- | ------------------------- | ----------------------------------- |
| **What It Does**          | Sends custom text message | Sends templated message             |
| **Setup Complexity**      | ⭐ Easy                   | ⭐⭐⭐ Moderate (template approval) |
| **Ready to Use**          | ✅ Immediately            | ⏳ After template approval          |
| **Message Format**        | Plain text with variables | Structured template                 |
| **Custom Branding**       | ✅ Full control           | ✅ Template-based                   |
| **Rate Limits**           | Standard                  | Recommended for business            |
| **Template Approval**     | ❌ Not needed             | ✅ Requires approval                |
| **Time to First Message** | 5 minutes                 | 1-2 days (approval wait)            |
| **Best For**              | Quick start, testing      | Production, compliance              |

---

## When to Use Each

### Use `send-whatsapp-message` If:

- 🚀 You want to launch **right now**
- 🎯 You're **testing** the integration
- 📝 You need **flexible** message content
- 💰 You have **low volume** requests
- 🔧 You want **easy debugging**

### Use `send-whatsapp-catalogue` If:

- 📋 You have **approved templates**
- 📊 You have **high message volume**
- 🏢 You need **professional formatting**
- 🔐 You want **compliance** with WhatsApp rules
- 💼 Running **production business**

---

## Current Implementation

### What's Active

The **Catalogues.tsx** component currently calls:

```typescript
/api/dens - whatsapp - message;
```

### How to Switch

To use templates instead, update this line in `Catalogues.tsx`:

```typescript
// Change from:
const response = await fetch('/api/send-whatsapp-message', {

// To:
const response = await fetch('/api/send-whatsapp-catalogue', {
```

---

## Example Messages

### send-whatsapp-message Output

```
Hi Rahul! 👋

Dream Decor Studio here! You requested our Premium Colour Catalogue.

📊 Download: https://example.com/catalogue.pdf

We'd love to help you choose the perfect colours!
Reply with any questions. ✨

Best regards,
Dream Decor Studio Team
```

### send-whatsapp-catalogue Output (Templated)

```
[Professional Template Format]

Template: catalogue_request
Parameters:
- {{1}} = Customer Name
- {{2}} = Catalogue Type
- {{3}} = Catalogue Link

(Exact formatting defined by Meta-approved template)
```

---

## Recommendation

### Launch Phase: Use `send-whatsapp-message` ✅

1. Set up credentials (5 min)
2. Deploy (2 min)
3. Start sending messages immediately
4. Test with real users

### Scale Phase: Consider `send-whatsapp-catalogue`

1. Create message templates
2. Submit to Meta for approval
3. Switch API endpoint
4. Deploy updated code

You can do this **without downtime** - just update the fetch URL in Catalogues.tsx.

---

## How to Create a Template (for later)

When ready, go to Meta App Manager:

1. Navigate to **WhatsApp** → **Message Templates**
2. Create template named: `catalogue_request`
3. Example template:

   ```
   Hi {{1}},

   Your {{2}} catalogue is ready:
   {{3}}

   Best regards,
   Dream Decor Studio
   ```

4. Submit for approval (30 min - 2 days)
5. Once approved, switch to `send-whatsapp-catalogue`

---

## API Endpoint Differences

### POST `/api/send-whatsapp-message`

```json
{
  "phoneNumber": "+919876543210",
  "catalogueName": "Premium Colour Catalogue",
  "customerName": "Rahul",
  "catalogueUrl": "https://example.com/catalogue.pdf"
}
```

### POST `/api/send-whatsapp-catalogue`

```json
{
  "phoneNumber": "+919876543210",
  "templateName": "catalogue_request",
  "templateParams": [
    "Rahul",
    "Premium Colour Catalogue",
    "https://example.com/catalogue.pdf"
  ]
}
```

---

## Decision Tree

```
START
  │
  ├─ Have time for template approval?
  │  ├─ NO  → ✅ Use send-whatsapp-message
  │  └─ YES → Continue
  │
  └─ High volume (100+ msgs/day)?
     ├─ NO  → ✅ Use send-whatsapp-message
     └─ YES → ✅ Use send-whatsapp-catalogue
```

---

**TL;DR**: Use `send-whatsapp-message` to launch today. Switch to templates later if needed.
