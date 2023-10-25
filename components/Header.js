import Close from '../icons/ui/close.svg';
import Search from './Search';
import Link from 'next/link';
import Menu from '@/icons/ui/menu.svg';

/**
 * Renders the header component.
 *
 * @param {string} title - The title to display in the header.
 * @param {boolean} isSearchEnabled - Flag indicating if search functionality is enabled.
 * @param {function} setQuery - Callback function to set the search query.
 * @returns {JSX.Element} The header component.
 */
export default function Header({ title, isSearchEnabled, setQuery }) {
  return (
    <>
      {/* Header container */}
      <div className='flex w-full items-center mb-[var(--typography-spacing-vertical)] animate-fade-in'>
        {/* Title */}
        <h1 className='m-0'>{title}</h1>

        {/* Right section */}
        <div className='flex items-center justify-end w-full gap-4'>
          {/* Search input (hidden on small screens) */}
          {isSearchEnabled && (
            <Search
              className='hidden sm:block sm:w-2/3 md:w-7/12 lg:w-1/3 h-8 m-0'
              setQuery={setQuery}
            />
          )}

          {/* Menu link (visible on small screens) */}
          <Link href='#menu' className='sm:hidden'>
            <Menu color='#a2afb9' className='w-5 h-5' />
          </Link>

          {/* Close link */}
          <Link href='/'>
            <Close color='#a2afb9' className='w-5 h-5' />
          </Link>
        </div>
      </div>

      {/* Search input (visible on small screens) */}
      {isSearchEnabled && (
        <Search className='sm:hidden w-full h-8' setQuery={setQuery} />
      )}
    </>
  );
}
