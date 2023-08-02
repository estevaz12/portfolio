import Image from 'next/image';

export default function Gallery({ images }) {
  return (
    <div className='grid grid-cols-3 gap-2'>
      {images.map((image) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
          width={1440}
          height={900}
          loading='lazy'
          className='w-full h-auto'
        />
      ))}
    </div>
  );
}
