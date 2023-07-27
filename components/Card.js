import Image from 'next/image';
import Date from './Date';

export default function Card({ title, desc, date, page }) {
  return (
    <article className='m-0 transition ease-in-out hover:scale-[1.025] duration-300'>
      <header className='relative overflow-hidden h-52'>
        <Image
          src={`/${page}/preview.png`}
          alt={`Preview of ${title} project`}
          fill={true}
          className='object-cover object-top'
        />
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
