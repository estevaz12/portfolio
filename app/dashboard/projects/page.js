import Card from '@/components/Card';
import Header from '@/components/Header';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function Projects() {
  const postsData = getSortedPostsData('projects');

  return (
    <>
      <Header title='Projects' isSearchEnabled={true} />
      <div className='grid grid-cols-2'>
        {postsData.map((post) => (
          <Link
            key={post.id}
            href={`/dashboard/projects/${post.id}`}
            className='hover:no-underline'
          >
            <Card
              title={post.title}
              desc={post.desc}
              date={post.date}
              page={`projects/${post.id}`}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
