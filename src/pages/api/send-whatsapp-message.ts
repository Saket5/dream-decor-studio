import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'nodejs',
};

const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
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

export default async function handler(request: NextRequest) {
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { phoneNumber, catalogueName, customerName, pdfLink } = (await request.json()) as MessageData;

    if (!phoneNumber || !catalogueName || !pdfLink) {
      return NextResponse.json(
        { error: 'Phone number, catalogue name, and PDF link are required' },
        { status: 400 }
      );
    }

    if (!WHATSAPP_PHONE_NUMBER_ID || !WHATSAPP_ACCESS_TOKEN) {
      console.error('Missing WhatsApp configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Format phone number - remove all non-digits
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    
    // Add country code if missing (default to +91 for India)
    const finalPhone = formattedPhone.startsWith('91') 
      ? `91${formattedPhone}` 
      : formattedPhone.length === 10 
      ? `91${formattedPhone}`
      : formattedPhone;

    // Send document message with intro text
    const introPayload = {
      messaging_product: 'whatsapp',
      type: 'text',
      to: finalPhone,
      text: {
        body: `Hello ${customerName || 'there'}! 👋\n\nThank you for your interest in our ${catalogueName} catalogue from Dream Decor Studio! 🎨\n\nPlease find the detailed PDF attached below. Feel free to reach out with any questions!`,
      },
    };

    // Send intro message first
    const introResponse = await fetch(WHATSAPP_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(introPayload),
    });

    if (!introResponse.ok) {
      const errorData = await introResponse.json();
      console.error('WhatsApp API Error (intro):', errorData);
      return NextResponse.json(
        { error: 'Failed to send introduction message', details: errorData },
        { status: introResponse.status }
      );
    }

    // Now send the PDF document
    const documentPayload = {
      messaging_product: 'whatsapp',
      type: 'document',
      to: finalPhone,
      document: {
        link: pdfLink,
        caption: catalogueName,
      },
    };

    const documentResponse = await fetch(WHATSAPP_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(documentPayload),
    });

    if (!documentResponse.ok) {
      const errorData = await documentResponse.json();
      console.error('WhatsApp API Error (document):', errorData);
      return NextResponse.json(
        { error: 'Failed to send PDF document', details: errorData },
        { status: documentResponse.status }
      );
    }

    const data = await documentResponse.json();
    return NextResponse.json({
      success: true,
      message: 'Catalogue sent successfully via WhatsApp',
      messageId: data.messages?.[0]?.id,
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message', details: String(error) },
      { status: 500 }
    );
  }
}
