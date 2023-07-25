import Image from 'next/image';
import Date from './Date';

export default function Card({ title, desc, date, page }) {
  return (
    <article className='m-0'>
      <header className='relative h-40 overflow-hidden'>
        <Image
          src={`/${page}/preview.png`}
          alt={`Preview of ${title} project`}
          fill={true}
          className='object-cover object-top'
        />
      </header>
      <hgroup className='m-0'>
        <h3>{title}</h3>
        <p className='m-0 truncate'>{desc}</p>
        <p className='m-0'>
          {date === 'null' ? (
            '🏗️ Developing'
          ) : (
            <>
              ✅ <Date dateStr={date} />
            </>
          )}
        </p>
      </hgroup>
    </article>
  );
}
