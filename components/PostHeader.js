import Image from 'next/image';
import Preview from './Preview';
import { blurDataURL } from '@/lib/blurDataURL';

export default function PostHeader({
  page,
  post,
  bgAvailable,
  previewImg,
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
          placeholder='blur'
          blurDataURL={blurDataURL}
          className='object-cover'
        />
      )}

      {(() => {
        if (previewImg) {
          return (
            <Image
              src={previewImg}
              alt={`${title} preview`}
              fill={true}
              priority={true}
              placeholder='blur'
              blurDataURL={blurDataURL}
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
