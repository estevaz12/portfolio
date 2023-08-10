import Header from '@/components/Header';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import PostCard from '@/components/PostCard';

export default function PostsPageLayout({ page, isSearchEnabled }) {
  const postsData = getSortedPostsData(page);

  return (
    <>
      <Header
        title={page.charAt(0).toUpperCase() + page.slice(1)}
        isSearchEnabled={isSearchEnabled}
      />
      <div className='grid grid-cols-3 animate-fade-in'>
        {postsData.map((post) => (
          <Link
            key={post.id}
            href={`/${page}/${post.id}`}
            className='hover:no-underline'
          >
            <PostCard
              title={post.title}
              desc={post.desc}
              date={post.date}
              page={page}
              post={post.id}
              stack={post.stack.split(',').sort()}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
