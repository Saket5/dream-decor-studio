import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'nodejs',
};

const WHATSAPP_BUSINESS_ACCOUNT_ID = process.env.WHATSAPP_BUSINESS_ACCOUNT_ID;
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const WHATSAPP_API_URL = `https://graph.instagram.com/v18.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`;

interface CatalogueData {
  phoneNumber: string;
  catalogueName: string;
  customerName: string;
  productType?: string;
}

export default async function handler(request: NextRequest) {
  // Handle CORS
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
    const { phoneNumber, catalogueName, customerName, productType } = (await request.json()) as CatalogueData;

    // Validate inputs
    if (!phoneNumber || !catalogueName) {
      return NextResponse.json(
        { error: 'Phone number and catalogue name are required' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!WHATSAPP_PHONE_NUMBER_ID || !WHATSAPP_ACCESS_TOKEN) {
      console.error('Missing WhatsApp configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Format phone number (remove special characters, ensure +country code)
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    const phoneWithCountry = formattedPhone.startsWith('91')
      ? formattedPhone
      : formattedPhone;

    // Create message payload
    const messagePayload = {
      messaging_product: 'whatsapp',
      to: phoneWithCountry,
      type: 'template',
      template: {
        name: 'catalogue_request',
        language: {
          code: 'en_US',
        },
        components: [
          {
            type: 'body',
            parameters: [
              {
                type: 'text',
                text: customerName || 'Valued Customer',
              },
              {
                type: 'text',
                text: catalogueName,
              },
              {
                type: 'text',
                text: productType || 'interior design products',
              },
            ],
          },
        ],
      },
    };

    // Send message via WhatsApp API
    const response = await fetch(WHATSAPP_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messagePayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('WhatsApp API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send catalogue via WhatsApp', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Message sent successfully:', data);

    return NextResponse.json({
      success: true,
      message: 'Catalogue sent successfully via WhatsApp',
      messageId: data.messages?.[0]?.id,
    });
  } catch (error) {
    console.error('Error sending WhatsApp catalogue:', error);
    return NextResponse.json(
      { error: 'Failed to send catalogue', details: String(error) },
      { status: 500 }
    );
  }
}
