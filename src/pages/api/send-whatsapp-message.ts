import type { VercelRequest, VercelResponse } from '@vercel/node';

const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const WHATSAPP_BUSINESS_ACCOUNT_ID = process.env.WHATSAPP_BUSINESS_ACCOUNT_ID;
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const WHATSAPP_API_URL = `https://graph.instagram.com/v18.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`;

interface MessageData {
  phoneNumber: string;
  catalogueName: string;
  customerName: string;
  pdfLink: string;
  customerEmail?: string;
  customerMessage?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { phoneNumber, catalogueName, customerName, pdfLink } = req.body as MessageData;

    // Validate inputs
    if (!phoneNumber || !catalogueName || !pdfLink) {
      console.error('Missing required fields:', { phoneNumber, catalogueName, pdfLink });
      return res.status(400).json({
        error: 'Phone number, catalogue name, and PDF link are required',
      });
    }

    // Validate environment variables
    if (!WHATSAPP_PHONE_NUMBER_ID || !WHATSAPP_ACCESS_TOKEN) {
      console.error('Missing WhatsApp configuration');
      console.error('WHATSAPP_PHONE_NUMBER_ID:', WHATSAPP_PHONE_NUMBER_ID ? '✓ set' : '❌ missing');
      console.error('WHATSAPP_ACCESS_TOKEN:', WHATSAPP_ACCESS_TOKEN ? '✓ set' : '❌ missing');
      console.error('WHATSAPP_BUSINESS_ACCOUNT_ID:', WHATSAPP_BUSINESS_ACCOUNT_ID ? '✓ set' : '❌ missing');
      return res.status(500).json({
        error: 'Server configuration error: Missing WhatsApp credentials in environment variables',
        debug: {
          hasPhoneId: !!WHATSAPP_PHONE_NUMBER_ID,
          hasToken: !!WHATSAPP_ACCESS_TOKEN,
        },
      });
    }

    // Format phone number - remove all non-digits
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    
    // Add country code if missing (default to +91 for India)
    const finalPhone = formattedPhone.startsWith('91') 
      ? `91${formattedPhone}` 
      : formattedPhone.length === 10 
      ? `91${formattedPhone}`
      : formattedPhone;

    console.log('Sending WhatsApp message to:', finalPhone);

    // Send intro text message
    const introPayload = {
      messaging_product: 'whatsapp',
      type: 'text',
      to: finalPhone,
      text: {
        body: `Hello ${customerName || 'there'}! 👋\n\nThank you for your interest in our ${catalogueName} catalogue from Dream Decor Studio! 🎨\n\nPlease find the detailed PDF attached below. Feel free to reach out with any questions!`,
      },
    };

    console.log('Sending intro message...');
    const introResponse = await fetch(WHATSAPP_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(introPayload),
    });

    if (!introResponse.ok) {
      let errorData;
      try {
        errorData = await introResponse.json();
      } catch {
        errorData = { error: `HTTP ${introResponse.status}`, text: await introResponse.text() };
      }
      console.error('WhatsApp API Error (intro):', errorData);
      return res.status(introResponse.status).json({
        error: 'Failed to send introduction message',
        details: errorData,
      });
    }

    console.log('Intro message sent successfully');

    // Send PDF document
    const documentPayload = {
      messaging_product: 'whatsapp',
      type: 'document',
      to: finalPhone,
      document: {
        link: pdfLink,
        caption: catalogueName,
      },
    };

    console.log('Sending document...');
    const documentResponse = await fetch(WHATSAPP_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(documentPayload),
    });

    if (!documentResponse.ok) {
      let errorData;
      try {
        errorData = await documentResponse.json();
      } catch {
        errorData = { error: `HTTP ${documentResponse.status}`, text: await documentResponse.text() };
      }
      console.error('WhatsApp API Error (document):', errorData);
      return res.status(documentResponse.status).json({
        error: 'Failed to send PDF document',
        details: errorData,
      });
    }

    const data = await documentResponse.json();
    console.log('Document sent successfully');

    return res.status(200).json({
      success: true,
      message: 'Catalogue sent successfully via WhatsApp',
      messageId: data.messages?.[0]?.id,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Failed to send message',
      details: error instanceof Error ? error.message : String(error),
    });
  }
