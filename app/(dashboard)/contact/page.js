import Header from '@/components/Header';

import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import Upwork from '@/icons/ui/upwork.svg';
import Github from '@/icons/ui/github.svg';

export default function Contact() {
  return (
    <>
      <Header title={'Contact'} isSearchEnabled={false} />
      <div className='flex gap-4 max-sm:flex-col-reverse animate-fade-in'>
        <article className='flex-auto m-0'>
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
          <Link
            href='https://www.linkedin.com/in/esteban-vc/'
            role='button'
            className='flex items-center gap-2 m-0 max-sm:justify-center bg-coffee outline'
          >
            <Image
              src='/linkedin.png'
              alt='LinkedIn Logo'
              width={128}
              height={128}
              className='inline w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10'
            />
            <h3 className='mb-0 text-[var(--primary)] hover:text-[var(--primary-hover)]'>
              LinkedIn
            </h3>
          </Link>
          <Link
            href='https://github.com/estevaz12'
            role='button'
            className='flex items-center gap-2 m-0 max-sm:justify-center bg-coffee outline'
          >
            <Github className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10' />
            <h3 className='mb-0 text-[var(--primary)] hover:text-[var(--primary-hover)]'>
              GitHub
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
}

// TODO: add upwork link
