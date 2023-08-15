import Close from '../icons/ui/close.svg';
import Search from './Search';
import Link from 'next/link';
import Menu from '@/icons/ui/menu.svg';

export default function Header({ title, isSearchEnabled }) {
  return (
    <div className='flex w-full items-center mb-[var(--typography-spacing-vertical)] animate-fade-in'>
      <h1 className='m-0'>{title}</h1>
      <div className='flex items-center justify-end w-full gap-4'>
        {/* {isSearchEnabled && <Search className='w-1/3 h-8 m-0' />} */}

        <Link href='#menu' className='sm:hidden'>
          <Menu color='#a2afb9' className='w-5 h-5' />
        </Link>

        <Link href='/'>
          <Close color='#a2afb9' className='w-5 h-5' />
        </Link>
      </div>
    </div>
  );
}
