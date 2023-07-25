import Card from '@/components/Card';
import Header from '@/components/Header';
import { getSortedPostsData } from '@/lib/posts';

export default function Projects() {
  const postsData = getSortedPostsData('projects');

  return (
    <>
      <Header title='Projects' isSearchEnabled={true} />
      <div className='grid grid-cols-3'>
        {postsData.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            desc={post.desc}
            date={post.date}
            page={`projects/${post.id}`}
          />
        ))}
      </div>
    </>
  );
}
