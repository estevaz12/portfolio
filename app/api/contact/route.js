import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  // get form data from request body
  const { firstName, lastName, email, message } = await request.json();

  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Contact Form" ${process.env.GMAIL_USER}`,
      to: process.env.GMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `Name: ${firstName} ${lastName}\n\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ status: 'success', message: 'Sent' });
  } catch (error) {
    // return error response
    return NextResponse.json(
      { status: 'error', message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
