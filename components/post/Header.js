import Image from 'next/image';

export default function Header({ img, title }) {
  return (
    <header className='fixed top-0 left-0 w-full overflow-hidden h-1/2'>
      <Image
        src={img}
        alt={`${title} preview`}
        fill={true}
        priority={true}
        className='object-cover object-top -z-10'
      />
      <h1>{title}</h1>
    </header>
  );
}
