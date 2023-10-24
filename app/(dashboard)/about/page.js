import Header from '@/components/Header';
import PostsPageLayout from '@/components/PostsPageLayout';
import { getSortedPostsData } from '@/lib/posts';

export default function About() {
  const posts = getSortedPostsData('about');

  return (
    <>
      <Header title='About' />
      <PostsPageLayout page='about' posts={posts} />
    </>
  );
}
