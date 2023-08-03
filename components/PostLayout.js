import Image from 'next/image';
import Link from 'next/link';
import Date from './Date';
import { skills } from '@/lib/skills';
import Gallery from './Gallery';
import satori from 'satori';
import Preview from './Preview';
import StackSvg from './StackSvg';
import path from 'path';
import fs from 'fs';

export default function PostLayout({
  title,
  date,
  headerImg,
  stack,
  github,
  gallery,
  children,
}) {
  const imgPath = path.join('public', headerImg);

  return (
    <>
      <header className='flex items-center justify-center w-full h-1/2 mt-[var(--spacing)]'>
        {fs.existsSync(imgPath) ? (
          <Image
            src={headerImg}
            alt={`${title} preview`}
            width={1200}
            height={630}
            priority={true}
            className='w-auto h-full preview-shadow'
          />
        ) : (
          <Preview stack={stack} />
        )}
      </header>

      <div className='flex gap-2'>
        <article className='flex-auto'>
          <hgroup>
            <h1>{title}</h1>
            <p>
              <Date dateStr={date} />
            </p>
          </hgroup>

          {children}
        </article>
        <article className='sticky top-0 flex-none w-fit h-fit'>
          <h5 className='mb-2 text-[var(--h1-color)]'>Stack</h5>
          <ul className='mb-0'>
            {stack.map((skill) => (
              <li key={skill} className='mb-2 list-none last:mb-0'>
                <small>
                  <StackSvg skill={skill} />
                  &nbsp;&nbsp;{skills[skill].name}
                </small>
              </li>
            ))}
          </ul>

          {github !== 'null' && (
            <Link href={github} className='hover:no-underline' target='_blank'>
              <button
                type='button'
                className='mt-4 mb-0 outline text-[var(--contrast-inverse)] border-[var(--secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] p-2'
              >
                <small>
                  <StackSvg skill='github' />
                  &nbsp;&nbsp;Open in GitHub
                </small>
              </button>
            </Link>
          )}
        </article>
      </div>

      <Gallery images={gallery} />
    </>
  );
}
