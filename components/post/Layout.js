import Header from './Header';

export default function Layout({
  title,
  date,
  headerImg,
  stack,
  galleryImgs,
  children,
}) {
  return (
    <>
      <Header img={headerImg} title={title} />
      <article>{children}</article>
    </>
  );
}
