import PostLayout from '@/components/PostLayout';
import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateStaticParams() {
  const projects = getAllPostIds('projects');

  return projects.map((project) => {
    id: project;
  });
}

export default async function Project({ params }) {
  const { id } = params;
  const post = await getPostData('projects', id);

  return (
    <PostLayout
      title={post.title}
      date={post.date}
      headerImg={`/projects/${post.id}/preview.png`}
      stack={post.stack.split(',').sort()}
    >
      <div
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        className='[&_li]:mb-[var(--typography-spacing-vertical)] [&_:last-child]:mb-0 [&_li]:list-["\1F4BB"] [&_li]:list-inside marker:mr-4'
      />
    </PostLayout>
  );
}
