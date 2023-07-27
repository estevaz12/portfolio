import Image from 'next/image';
import Date from './Date';

export default function PostLayout({
  title,
  date,
  headerImg,
  stack,
  galleryImgs,
  children,
}) {
  return (
    <>
      <header className='flex items-center justify-center w-full h-1/2 mt-[var(--spacing)]'>
        <Image
          src={headerImg}
          alt={`${title} preview`}
          width={1200}
          height={675}
          priority={true}
          className='w-auto h-full preview-shadow'
        />
      </header>

      <div className='flex gap-2'>
        <article className='basis-3/4'>
          <hgroup>
            <h1>{title}</h1>
            <p>
              <Date dateStr={date} />
            </p>
          </hgroup>

          {children}
        </article>
        <article className='basis-1/4'>stack</article>
      </div>
    </>
  );
}
