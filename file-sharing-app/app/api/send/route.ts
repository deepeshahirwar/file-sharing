import { EmailTemplate } from './../../_components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res:Response) {
  try {
    // Parse the JSON body from the request
    const response = await request.json();
    
    // Ensure that the required data is present
    if (!response?.emailToSend || !response?.userName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'deepesh7024@resend.dev',
      to: [response.emailToSend],
      subject: `${response?.userName} has shared a file with you`,
      react: EmailTemplate({ response }), // Ensure EmailTemplate returns valid JSX or HTML
    });
    console.log(`Email sent to: ${response.emailToSend}`);
        
    // Return success response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Email sending failed' }, { status: 500 });
  }
}
