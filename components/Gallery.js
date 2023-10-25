import { getPostGallery } from '@/lib/posts';
import { blurDataURL } from '@/lib/blurDataURL';
import Image from 'next/image';

/**
 * Renders a gallery of images.
 *
 * @param {String} page - The page name.
 * @param {Object} post - The post object.
 * @returns {JSX.Element} - The rendered gallery component.
 */
export default async function Gallery({ page, post }) {
  const images = getPostGallery(page, post);

  return (
    <div className='gap-2 space-y-4 sm:space-y-2 sm:columns-2 animate-fade-in'>
      {images.map((img) => (
        <Image
          key={img.id}
          src={img.src}
          alt={img.alt}
          width={1440}
          height={900}
          placeholder='blur'
          blurDataURL={blurDataURL}
          className='w-full h-auto rounded-[var(--border-radius)]'
        />
      ))}
    </div>
  );
}

// TODO: consider using aspect-ratio for responsive images
