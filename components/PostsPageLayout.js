import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import PostCard from '@/components/PostCard';

export default function PostsPageLayout({ page }) {
  const postsData = getSortedPostsData(page);

  return (
    <>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 animate-fade-in'>
        {postsData.map((post) => (
          <Link
            key={post.id}
            href={`/${page}/${post.id}/#content`}
            className='hover:no-underline'
          >
            <PostCard
              page={page}
              post={post.id}
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
