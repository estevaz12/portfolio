'use client';

import { useState } from 'react';
import Success from '@/icons/ui/send-success.svg';
import Failed from '@/icons/ui/send-fail.svg';

export default function ContactForm() {
  // init = 0, success = 200, error = 500
  const [status, setStatus] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    // get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // send data to API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setStatus(response.status);
  }

  return (
    <>
      <header className='text-center bg-[var(--primary-hover)]'>
        <p className='m-0'>
          <b>Send me an email</b>
        </p>
      </header>

      {(() => {
        switch (status) {
          case 0:
            return (
              <>
                <div className='mb-4'>
                  <small>
                    <em className='text-muted'>
                      <span className='text-light-blue'>*</span> All fields
                      required
                    </em>
                  </small>
                </div>

                <form onSubmit={handleSubmit} className='mb-0'>
                  <div className='grid gap-y-0'>
                    <label htmlFor='firstName'>
                      First Name
                      <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        placeholder='First Name'
                        disabled={submitting}
                        required
                      />
                    </label>

                    <label htmlFor='lastName'>
                      Last Name
                      <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        placeholder='Last Name'
                        disabled={submitting}
                        required
                      />
                    </label>
                  </div>

                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    disabled={submitting}
                    required
                  />

                  <label htmlFor='message'>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Type message here...'
                    disabled={submitting}
                    required
                  ></textarea>

                  {!submitting ? (
                    <button
                      type='submit'
                      className='outline mb-0 transition-colors ease-in-out hover:bg-[var(--primary-hover)] hover:text-white hover:border-[var(--primary-hover)] duration-300'
                    >
                      Send
                    </button>
                  ) : (
                    <button
                      className='mb-0 bg-[var(--primary-hover)] text-white border-[var(--primary-hover)]'
                      aria-busy='true'
                    >
                      Sending...
                    </button>
                  )}
                </form>
              </>
            );

          case 200:
            return (
              <div className='text-center'>
                <Success width='5rem' height='5rem' className='mb-4' />
                <h2>Message sent</h2>
                Thank you for reaching out!
              </div>
            );

          default:
            // status === error
            return (
              <div className='text-center'>
                <Failed width='5rem' height='5rem' className='mb-4' />
                <h2>Failed to send message</h2>
                Please try again later.
              </div>
            );
        }
      })()}
    </>
  );
}
