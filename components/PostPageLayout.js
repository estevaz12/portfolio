import Card from '@/components/Card';
import Header from '@/components/Header';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function PostPageLayout({ page, isSearchEnabled }) {
  const postsData = getSortedPostsData(page);

  return (
    <>
      <Header
        title={page.charAt(0).toUpperCase() + page.slice(1)}
        isSearchEnabled={isSearchEnabled}
      />
      <div className='grid grid-cols-3'>
        {postsData.map((post) => (
          <Link
            key={post.id}
            href={`/dashboard/${page}/${post.id}`}
            className='hover:no-underline'
          >
            <Card
              title={post.title}
              desc={post.desc}
              date={post.date}
              stack={post.stack.split(',').sort()}
              page={`${page}/${post.id}`}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
