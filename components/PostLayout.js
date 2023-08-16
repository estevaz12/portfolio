import Image from 'next/image';
import Link from 'next/link';
import Date from './Date';
import { skills } from '@/lib/skills';
import Gallery from './Gallery';
import Preview from './Preview';
import StackSvg from './StackSvg';
import path from 'path';
import fs from 'fs';
import Github from '@/icons/ui/github.svg';
import MobilePostNav from './MobilePostNav';

export default function PostLayout({
  title,
  date,
  headerImg,
  stack,
  github,
  gallery,
  page,
  children,
}) {
  const bgPath = path.join('public', `/${page}/preview-bg.png`);
  const imgPath = path.join('public', headerImg);

  return (
    <>
      <div className='sm:hidden animate-fade-in'>
        <MobilePostNav />
      </div>

      <header className='flex items-center justify-center w-full h-auto sm:h-1/2 mt-[var(--spacing)] mb-8 animate-fade-in'>
        <div className='w-full sm:w-auto h-auto sm:h-full aspect-video preview-shadow rounded-[var(--border-radius)] relative overflow-hidden -z-10'>
          {fs.existsSync(bgPath) && (
            <Image
              src={`/${page}/preview-bg.png`}
              alt={`Background`}
              fill={true}
              className='object-cover'
            />
          )}

          {(() => {
            if (fs.existsSync(imgPath)) {
              return (
                <Image
                  src={headerImg}
                  alt={`${title} preview`}
                  fill={true}
                  priority={true}
                  className='object-contain'
                />
              );
            } else if (stack.length !== 0) {
              return <Preview stack={stack} />;
            }
          })()}
        </div>
      </header>

      <div className='flex gap-4 mb-4 max-sm:flex-col sm:gap-2 sm:mb-2 animate-fade-in'>
        <article className='flex-auto my-0'>
          {date.length !== 0 ? (
            <hgroup>
              <h1>{title}</h1>
              <p>
                <Date dateStr={date} />
              </p>
            </hgroup>
          ) : (
            <h1 className='mb-6'>{title}</h1>
          )}

          {children}
        </article>

        {stack[0].length !== 0 && (
          <article className='sticky top-0 w-full my-0 sm:flex-none sm:w-fit h-fit'>
            <h5 className='mb-2 text-[var(--h1-color)] max-sm:text-xl'>
              Stack
            </h5>
            <ul className='mb-0'>
              {stack.map((skill) => (
                <li key={skill} className='mb-2 list-none last:mb-0'>
                  <small className='inline-flex items-center gap-2 max-sm:text-base'>
                    <StackSvg
                      skill={skill}
                      className='w-4 h-4 sm:w-[var(--font-size)] sm:h-[var(--font-size)]'
                    />
                    {skills[skill].name}
                  </small>
                </li>
              ))}
            </ul>

            {github.length !== 0 && (
              <Link
                href={github}
                className='hover:no-underline'
                target='_blank'
              >
                <button
                  type='button'
                  className='mt-4 mb-0 outline text-[var(--contrast-inverse)] border-[var(--secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] p-2'
                >
                  <small className='inline-flex items-center gap-2 max-sm:text-base'>
                    <Github className='w-5 h-5 sm:w-4 sm:h-4' />
                    View Source
                  </small>
                </button>
              </Link>
            )}
          </article>
        )}
      </div>

      {gallery.length !== 0 && <Gallery images={gallery} />}
    </>
  );
}
