import Link from 'next/link';
import Date from './Date';
import { skills } from '@/lib/skillsData';
import Gallery from './Gallery';
import StackSvg from './StackSvg';
import Github from '@/icons/ui/github.svg';
import MobilePostNav from './MobilePostNav';
import PostHeader from './PostHeader';
import Header from './Header';

/**
 * Renders the layout for a post page.
 *
 * @param {Object} props - The props for the post layout.
 * @param {string} props.page - The page name.
 * @param {Object} props.post - The post object.
 * @param {boolean} props.bgAvailable - Indicates if the background is available.
 * @param {string} props.previewImg - The URL of the preview image.
 * @param {string} props.title - The title of the post.
 * @param {string} props.date - The date of the post.
 * @param {Array} props.stack - The stack of skills used in the post.
 * @param {string} props.github - The URL of the GitHub repository.
 * @param {ReactNode} props.children - The content of the post.
 * @returns {ReactNode} The rendered post layout.
 */
export default async function PostLayout({
  page,
  post,
  bgAvailable,
  previewImg,
  title,
  date,
  stack,
  github,
  children,
}) {
  return (
    <>
      {/* Render the mobile post nav */}
      <div className='sm:hidden animate-fade-in'>
        <MobilePostNav />
      </div>

      {/* Render the header */}
      <div className='hidden md:block animate-fade-in'>
        <Header title={''} isSearchEnabled={false} />
      </div>

      {/* Render the post header */}
      <header className='flex items-center justify-center w-full h-auto sm:h-1/2 mt-[var(--spacing)] md:mt-0 mb-8 animate-fade-in'>
        <div className='w-full sm:w-auto h-auto sm:h-full aspect-video preview-shadow rounded-[var(--border-radius)] relative overflow-hidden -z-10'>
          <PostHeader
            page={page}
            post={post}
            bgAvailable={bgAvailable}
            previewImg={previewImg}
            title={title}
            stack={stack}
            sizes='(max-width: 768px) 575px, (max-width: 1024px) 785px, 1030px'
          />
        </div>
      </header>

      {/* Render the post content */}
      <div className='flex gap-4 mb-4 max-sm:flex-col sm:gap-2 sm:mb-2 animate-fade-in'>
        <article className='flex-auto my-0'>
          {/* Render the post title and date */}
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

          {/* Render the post content */}
          {children}
        </article>

        {/* Render the stack */}
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

            {/* Render the GitHub link */}
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

      {/* Render the gallery */}
      <Gallery page={page} post={post} />
    </>
  );
}
