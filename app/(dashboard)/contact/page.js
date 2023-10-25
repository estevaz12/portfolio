import Header from '@/components/Header';

import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import Upwork from '@/icons/ui/upwork.svg';
import Github from '@/icons/ui/github.svg';

/**
 * Renders the Contact component.
 * This component displays a contact form and links to social media profiles.
 */
export default function Contact() {
  return (
    <>
      {/* Render the header component */}
      <Header title={'Contact'} isSearchEnabled={false} />

      {/* Render the main content */}
      <div className='flex gap-4 max-sm:flex-col-reverse animate-fade-in'>
        <article className='flex-auto m-0'>
          {/* Render the contact form */}
          <ContactForm />
        </article>

        <div className='flex flex-col flex-none gap-4 sm:sticky sm:top-0 h-fit'>
          {/* <Link
            href='#'
            role='button'
            className='flex items-center gap-2 m-0 bg-coffee outline'
          >
            <Upwork className='w-10 h-10' />
            <h3 className='mb-0 text-[var(--primary)] hover:text-[var(--primary-hover)]'>
              Upwork
            </h3>
          </Link> */}
          {/* Render the LinkedIn link */}
          <Link
            href='https://www.linkedin.com/in/esteban-vc/'
            role='button'
            className='flex items-center gap-2 m-0 max-sm:justify-center bg-coffee outline'
            target='_blank'
          >
            <Image
              src='/linkedin.png'
              alt='LinkedIn Logo'
              width={128}
              height={128}
              className='inline w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10'
            />
            <h3 className='no-underline mb-0 text-[var(--primary)] hover:underline'>
              LinkedIn
            </h3>
          </Link>

          {/* Render the GitHub link */}
          <Link
            href='https://github.com/estevaz12'
            role='button'
            className='flex items-center gap-2 m-0 max-sm:justify-center bg-coffee outline'
            target='_blank'
          >
            <Github className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10' />
            <h3 className='no-underline mb-0 text-[var(--primary)] hover:underline'>
              GitHub
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
}

// TODO: add upwork link
