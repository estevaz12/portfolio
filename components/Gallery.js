import Image from 'next/image';

export default async function Gallery({ page, post }) {
  const images = await fetch(
    process.env.URL + `/api/${page}/${post}/gallery`
  ).then((res) => res.json());
  console.log(images);

  return (
    <div className='gap-2 space-y-4 sm:space-y-2 sm:columns-2 animate-fade-in'>
      {images.gallery.map((img) => (
        <Image
          key={img.id}
          src={img.src}
          alt={img.alt}
          width={1440}
          height={900}
          className='w-full h-auto rounded-[var(--border-radius)]'
        />
      ))}
    </div>
  );
}

// TODO: consider using aspect-ratio for responsive images
