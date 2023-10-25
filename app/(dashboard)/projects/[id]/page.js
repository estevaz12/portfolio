import PostLayout from '@/components/PostLayout';
import { getAllPostIds, getPostData } from '@/lib/posts';

// generates dynamic routes at build time
export async function generateStaticParams() {
  const projects = getAllPostIds('projects');

  return projects.map((project) => {
    id: project;
  });
}

/**
 * Renders a project page based on the provided parameters.
 *
 * @param {Object} params - The parameters object.
 * @param {string} params.id - The ID of the project.
 * @return {JSX.Element} The rendered project page.
 */
export default async function Project({ params }) {
  const { id } = params;
  const post = await getPostData('projects', id);

  return (
    <PostLayout
      page='projects'
      post={id}
      bgAvailable={post.bgAvailable}
      previewImg={post.previewImg}
      title={post.title}
      date={post.date}
      stack={post.stack.split(',').sort()}
      github={post.github}
    >
      {/* Set content from md file */}
      {/* All styling for the post content is done here */}
      <div
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        className='[&_li]:mb-[var(--typography-spacing-vertical)] [&_:last-child]:mb-0 [&_li]:list-image-[url(/laptop.svg)] [&_li]:list-inside marker:mr-4 [&_h4]:mb-1'
      />
    </PostLayout>
  );
}
