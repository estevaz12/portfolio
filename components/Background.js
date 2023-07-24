import Image from 'next/image';

export default function Background() {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-screen h-screen overflow-hidden -z-10 bg-dark-blue'>
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
