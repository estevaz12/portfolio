import Date from './Date';
import PostHeader from './PostHeader';

export default function PostCard({
  page,
  post,
  bgAvailable,
  previewImg,
  title,
  desc,
  date,
  stack,
}) {
  return (
    <article className='m-0 transition ease-in-out hover:scale-[1.025] duration-300'>
      <header className='relative h-auto p-0 overflow-hidden aspect-video'>
        <PostHeader
          page={page}
          post={post}
          bgAvailable={bgAvailable}
          previewImg={previewImg}
          title={title}
          stack={stack}
          sizes='(max-width: 640px) 570px, (max-width: 768px) 300px, 400px'
        />
      </header>
      <hgroup className='m-0'>
        <h4 className='truncate'>{title}</h4>
        <p className='m-0 line-clamp-3 text-[var(--contrast-inverse)]'>
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
