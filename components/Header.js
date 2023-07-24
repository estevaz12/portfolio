import Close from '../icons/close.svg';
import Search from './Search';
import Link from 'next/link';

export default function Header({ title, isSearchEnabled }) {
  return (
    <div className='flex w-full items-center mb-[var(--typography-spacing-vertical)]'>
      <h1 className='m-0'>{title}</h1>
      <div className='flex items-center justify-end w-full gap-4'>
        {isSearchEnabled && <Search className='w-1/3 h-8 m-0' />}
        <Link href='/'>
          <Close color='#a2afb9' className='w-4 h-4' />
        </Link>
      </div>
    </div>
  );
}
