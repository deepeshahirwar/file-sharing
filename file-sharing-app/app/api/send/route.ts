"use server";
import { EmailTemplate } from './../../_components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const response = await request.json();

    if (!response?.emailToSend || !response?.userName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailData = {
      from: 'deepesh798@resend.dev',
      to: [response.emailToSend],
      subject: `${response.userName} has shared a file with you`,
      react: EmailTemplate({ response }),
    };

    const data = await resend.emails.send(emailData);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Email sending failed' }, { status: 500 });
  }
}
