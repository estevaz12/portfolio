import Image from 'next/image';
import Date from './Date';
import path from 'path';
import fs from 'fs';
import Preview from './Preview';

export default function PostCard({ title, desc, date, page, post, stack }) {
  const bgPath = path.join('public', `/${page}/preview-bg.png`);
  const imgPath = path.join('public', `/${page}/${post}/preview.png`);

  return (
    <article className='m-0 transition ease-in-out hover:scale-[1.025] duration-300'>
      <header className='relative h-auto p-0 overflow-hidden aspect-video'>
        {fs.existsSync(bgPath) && (
          <Image
            src={`/${page}/preview-bg.png`}
            alt={`Background`}
            fill={true}
            className='object-cover'
          />
        )}
        {fs.existsSync(imgPath) ? (
          <Image
            src={`/${page}/${post}/preview.png`}
            alt={`Preview of ${title}`}
            fill={true}
            sizes='(max-width: 1280px) 25rem'
            priority={true}
            className='object-contain'
          />
        ) : (
          <Preview stack={stack} />
        )}
      </header>
      <hgroup className='m-0'>
        <h4 className='truncate'>{title}</h4>
        <p className='m-0 line-clamp-4 text-[var(--contrast-inverse)]'>
          <small>{desc}</small>
        </p>
        {date.length !== 0 && (
          <p className='m-0'>
            <Date dateStr={date} />
          </p>
        )}
      </hgroup>
    </article>
  );
}

// TODO: add sizes prop to images with fill=true on different breakpoints
