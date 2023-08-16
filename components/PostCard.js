import Image from 'next/image';
import Date from './Date';
import Preview from './Preview';
import { getPostImages } from '@/lib/posts';

export default async function PostCard({
  page,
  post,
  title,
  desc,
  date,
  stack,
}) {
  const isImgAvailable = await getPostImages(page, post);

  return (
    <article className='m-0 transition ease-in-out hover:scale-[1.025] duration-300'>
      <header className='relative h-auto p-0 overflow-hidden aspect-video'>
        {isImgAvailable.bg && (
          <Image
            src={`/${page}/preview-bg.png`}
            alt={`Background`}
            fill={true}
            className='object-cover'
          />
        )}

        {(() => {
          if (isImgAvailable.preview) {
            return (
              <Image
                src={`/${page}/${post}/preview.png`}
                alt={`${title} preview`}
                fill={true}
                priority={true}
                className='object-contain'
              />
            );
          } else if (stack[0].length !== 0) {
            return <Preview stack={stack} />;
          }
        })()}
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
