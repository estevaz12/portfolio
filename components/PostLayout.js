import Image from 'next/image';
import Date from './Date';
import { skills } from '@/lib/skills';
import dynamic from 'next/dynamic';

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
        <article className='flex-auto'>
          <hgroup>
            <h1>{title}</h1>
            <p>
              <Date dateStr={date} />
            </p>
          </hgroup>

          {children}
        </article>
        <article className='flex-none w-fit h-fit sticky top-0'>
          <h5 className='mb-2'>Stack</h5>
          <ul className='mb-0'>
            {stack.map((skill) => (
              <li key={skill} className='list-none mb-2 last:mb-0'>
                {StackSvg(skill)}&nbsp;&nbsp;{skills[skill].name}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}

function StackSvg(
  skill,
  className = 'w-[var(--font-size)] h-[var(--font-size)]'
) {
  const Svg = dynamic(() => import(`@/icons/skills/${skill}.svg`));
  return <Svg className={className} />;
}
