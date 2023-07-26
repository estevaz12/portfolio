import Layout from '@/components/post/Layout';
import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateStaticParams() {
  const projects = getAllPostIds('projects');

  return projects.map((project) => {
    id: project;
  });
}

export default function Project({ params }) {
  const { id } = params;
  const post = getPostData('projects', id);

  return (
    <Layout
      title={post.title}
      date={post.date}
      headerImg={`/projects/${post.id}/preview.png`}
    >
      {post.content}
    </Layout>
  );
}
