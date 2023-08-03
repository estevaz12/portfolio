import Image from 'next/image';
import Date from './Date';
import path from 'path';
import fs from 'fs';
import Preview from './Preview';

export default function Card({ title, desc, date, stack, page }) {
  const imgPath = path.join('public', `/${page}/preview.png`);

  return (
    <article className='m-0 transition ease-in-out hover:scale-[1.025] duration-300'>
      <header className='relative h-56 p-0 overflow-hidden'>
        {fs.existsSync(imgPath) ? (
          <Image
            src={`/${page}/preview.png`}
            alt={`Preview of ${title} project`}
            fill={true}
            sizes='(max-width: 1280px) 25rem'
            priority={true}
            className='object-cover object-top'
          />
        ) : (
          <Preview stack={stack} />
        )}
      </header>
      <hgroup className='m-0'>
        <h4>{title}</h4>
        <p className='m-0 line-clamp-2 text-[var(--contrast-inverse)]'>
          {desc}
        </p>
        <p className='m-0'>
          <Date dateStr={date} />
        </p>
      </hgroup>
    </article>
  );
}

// TODO: add sizes prop to card image on different breakpoints
