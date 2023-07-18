import Image from 'next/image';

export default function Background() {
  return (
    <div className='w-screen h-screen fixed top-0 bottom-0 left-0 right-0 -z-10 overflow-hidden bg-dark-blue'>
      <Image
        src='/background.svg'
        alt='Wavy background'
        fill={true}
        priority={true}
        className='object-cover'
      />
    </div>
  );
}
