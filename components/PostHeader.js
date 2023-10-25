import Image from 'next/image';
import Preview from './Preview';
import { blurDataURL } from '@/lib/blurDataURL';

/**
 * Renders the header component for a post.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.page - The name of the page.
 * @param {boolean} props.bgAvailable - Whether a background image is available.
 * @param {string} props.previewImg - The URL of the preview image.
 * @param {string} props.title - The title of the post.
 * @param {Array} props.stack - The stack of technologies used in the post.
 * @param {string} props.sizes - The sizes of the images.
 * @returns {JSX.Element} - The rendered component.
 */
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
          fill
          sizes={sizes}
          placeholder='blur'
          blurDataURL={blurDataURL}
          className='object-cover'
        />
      )}

      {/* Render the preview image if it exists */}
      {(() => {
        if (previewImg) {
          return (
            <Image
              src={previewImg}
              alt={`${title} preview`}
              fill
              sizes={sizes}
              priority
              placeholder='blur'
              blurDataURL={blurDataURL}
              className='object-contain'
              unoptimized={previewImg.endsWith('.apng') ? true : false}
            />
          );
        }
        // Render the stack preview if the preview image doesn't exist
        else if (stack[0].length !== 0) {
          return <Preview stack={stack} />;
        }
      })()}
    </>
  );
}
