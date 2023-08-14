import Header from '@/components/Header';
import PostsPageLayout from '@/components/PostsPageLayout';

export default function About() {
  return (
    <>
      <Header title='About' isSearchEnabled={false} />
      <PostsPageLayout page='about' />
    </>
  );
}
