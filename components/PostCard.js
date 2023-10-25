import Date from './Date';
import PostHeader from './PostHeader';

/**
 * Renders a post card with the given data.
 *
 * @param {object} props - The props object containing the post card data.
 * @param {string} props.page - The page name.
 * @param {object} props.post - The post object.
 * @param {boolean} props.bgAvailable - Indicates if background is available.
 * @param {string} props.previewImg - The URL of the preview image.
 * @param {string} props.title - The title of the post.
 * @param {string} props.desc - The description of the post.
 * @param {string} props.date - The date of the post.
 * @param {string} props.stack - The stack of technologies used in the post.
 * @returns {JSX.Element} - The rendered post card.
 */
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
