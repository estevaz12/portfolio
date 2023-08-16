'use client';

import Image from 'next/image';
import Preview from './Preview';
import { useState } from 'react';

export default function PostHeader({ page, post, title, stack }) {
  // const isImgAvailable = await getPostImages(page, post);
  const [imgErr, setImgErr] = useState({});

  const handleImgErr = (img) => {
    console.log('Image failed to load. Handling...');
    setImgErr((errors) => ({
      ...errors,
      [img]: true,
    }));
  };

  return (
    <>
      {!imgErr.bg && (
        <Image
          src={`/${page}/preview-bg.png`}
          alt={`Background`}
          fill={true}
          className='object-cover'
          onError={() => handleImgErr('bg')}
        />
      )}

      {(() => {
        if (!imgErr.preview) {
          return (
            <Image
              src={`/${page}/${post}/preview.png`}
              alt={`${title} preview`}
              fill={true}
              priority={true}
              className='object-contain'
              onError={() => handleImgErr('preview')}
            />
          );
        } else if (stack[0].length !== 0) {
          return <Preview stack={stack} />;
        }
      })()}
    </>
  );
}
