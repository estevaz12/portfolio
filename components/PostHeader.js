import Image from 'next/image';
import Preview from './Preview';

export default function PostHeader({
  page,
  post,
  bgAvailable,
  previewAvailable,
  title,
  stack,
}) {
  return (
    <>
      {bgAvailable && (
        <Image
          src={`/${page}/preview-bg.png`}
          alt={`Background`}
          fill={true}
          className='object-cover'
        />
      )}

      {(() => {
        if (previewAvailable) {
          return (
            <Image
              src={`/${page}/${post}/preview.png`}
              alt={`${title} preview`}
              fill={true}
              priority={true}
              className='object-contain'
            />
          );
        } else if (stack[0].length !== 0) {
          return <Preview stack={stack} />;
        }
      })()}
    </>
  );
}
