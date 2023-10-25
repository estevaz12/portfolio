import Link from 'next/link';
import PostCard from '@/components/PostCard';

/**
 * Render the layout for the PostsPage component.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.page - The current page.
 * @param {Array} props.posts - The array of posts.
 * @returns {JSX.Element} The rendered layout.
 */
export default function PostsPageLayout({ page, posts }) {
  return (
    <>
      {/* Render a grid with 1 column on mobile, 2 columns on small screens 
      and 3 columns on large screens */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 animate-fade-in'>
        {/* Map over the posts array and render a PostCard for each post */}
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/${page}/${post.id}#content`}
            className='hover:no-underline'
          >
            <PostCard
              page={page}
              post={post.id}
              bgAvailable={post.bgAvailable}
              previewImg={post.previewImg}
              title={post.title}
              desc={post.desc}
              date={post.date}
              stack={post.stack.split(',').sort()}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
