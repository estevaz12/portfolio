'use client';

import Image from 'next/image';
import Preview from './Preview';
import { useState } from 'react';

export default function PostHeader({ page, post, title, stack }) {
  const [bgError, setBgError] = useState(false);
  const [previewError, setPreviewError] = useState(false);

  const handleImgErr = (img) => {
    console.log('Image not available. Handling...');

    if (img === 'bg') {
      setBgError(true);
    } else {
      setPreviewError(true);
    }
  };

  return (
    <>
      {!bgError && (
        <Image
          src={`/${page}/preview-bg.png`}
          alt={`Background`}
          fill={true}
          className='object-cover'
          onError={() => handleImgErr('bg')}
        />
      )}

      {(() => {
        if (!previewError) {
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
