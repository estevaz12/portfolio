import PostLayout from '@/components/PostLayout';
import { getAllPostIds, getPostData } from '@/lib/posts';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const about = getAllPostIds('about');

  return about.map((post) => {
    id: post;
  });
}

export default async function Post({ params }) {
  const { id } = params;
  const post = await getPostData('about', id);

  return (
    <PostLayout
      page='about'
      post={id}
      bgAvailable={post.bgAvailable}
      previewAvailable={post.previewAvailable}
      title={post.title}
      date={post.date}
      stack={post.stack.split(',').sort()}
      github={post.github}
      gallery={post.gallery}
    >
      <div
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        className='[&_li]:mb-[var(--typography-spacing-vertical)] [&_:last-child]:mb-0 [&_li]:list-image-[url(/laptop.svg)] [&_li]:list-inside marker:mr-4'
      />
    </PostLayout>
  );
}
