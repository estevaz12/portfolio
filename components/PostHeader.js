import Image from 'next/image';
import Preview from './Preview';
import { blurDataURL } from '@/lib/blurDataURL';

export default function PostHeader({
  page,
  bgAvailable,
  previewImg,
  title,
  stack,
  sizes,
}) {
  return (
    <>
      {bgAvailable && (
        <Image
          src={`/${page}/preview-bg.png`}
          alt={`Background`}
          fill={true}
          sizes={sizes}
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
              sizes={sizes}
              priority={true}
              placeholder='blur'
              blurDataURL={blurDataURL}
              className='object-contain'
              unoptimized={previewImg.endsWith('.apng') ? true : false}
            />
          );
        } else if (stack[0].length !== 0) {
          return <Preview stack={stack} />;
        }
      })()}
    </>
  );
}
