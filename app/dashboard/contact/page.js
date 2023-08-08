import Header from '@/components/Header';

import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Header title={'Contact'} isSearchEnabled={false} />
      <div className='flex gap-4'>
        <article className='m-0 flex-auto'>
          <ContactForm />
        </article>

        <div className='flex flex-none flex-col gap-4'>
          <article className='m-0'>Upwork</article>
          <article className='m-0'>LinkedIn</article>
          <article className='m-0'>Github</article>
        </div>
      </div>
    </>
  );
}
