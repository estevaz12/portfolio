import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Handles the HTTP POST request.
 *
 * @param {Request} request - The request object.
 * @returns {Response} - The response object.
 */
export async function POST(request) {
  // extract form data from the request body
  const { firstName, lastName, email, message } = await request.json();

  try {
    // create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // send an email using the transporter object
    await transporter.sendMail({
      from: `"Contact Form" ${process.env.GMAIL_USER}`,
      to: process.env.GMAIL_USER,
      subject: 'Portfolio Contact Form',
      text: `Name: ${firstName} ${lastName}\n\nEmail: ${email}\n\nMessage:\n\n${message}`,
    });

    // return a success response
    return NextResponse.json({ status: 'success', message: 'Sent' });
  } catch (error) {
    // return an error response
    return NextResponse.json(
      { status: 'error', message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
