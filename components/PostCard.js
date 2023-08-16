import Date from './Date';
import PostHeader from './PostHeader';

export default async function PostCard({
  page,
  post,
  title,
  desc,
  date,
  stack,
}) {
  return (
    <article className='m-0 transition ease-in-out hover:scale-[1.025] duration-300'>
      <header className='relative h-auto p-0 overflow-hidden aspect-video'>
        <PostHeader page={page} post={post} title={title} stack={stack} />
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
