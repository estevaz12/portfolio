import Image from 'next/image';

export default function Gallery({ images }) {
  return (
    <div className='gap-2 space-y-4 sm:space-y-2 sm:columns-2 animate-fade-in'>
      {images.map((image) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
          width={1440}
          height={900}
          loading='lazy'
          className='w-full h-auto rounded-[var(--border-radius)]'
        />
      ))}
    </div>
  );
}

// TODO: consider using aspect-ratio for responsive images
