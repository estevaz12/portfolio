import PostLayout from '@/components/PostLayout';
import { getAllPostIds, getPostData } from '@/lib/posts';

// statically generates dynamic routes at build time
export async function generateStaticParams() {
  const about = getAllPostIds('about');

  return about.map((post) => {
    id: post;
  });
}

/**
 * Renders a post based on the given parameters.
 *
 * @param {Object} params - The parameters object.
 * @param {string} params.id - The ID of the post.
 * @return {JSX.Element} The rendered post component.
 */
export default async function Post({ params }) {
  const { id } = params;
  const post = await getPostData('about', id);

  return (
    <PostLayout
      page='about'
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
        className='[&_li]:mb-[var(--typography-spacing-vertical)] [&_:last-child]:mb-0 [&_li]:list-image-[url(/laptop.svg)] [&_li]:list-inside marker:mr-4 [&_h4]:mb-1 [&_hr]:mb-[var(--typography-spacing-vertical)] [&_h4]:inline-flex [&_h4]:items-center [&_h4]:gap-1 [&_h4_>_img]:w-[var(--font-size)] [&_svg]:h-[var(--font-size)]'
      />
    </PostLayout>
  );
}
