'use client';

import Back from '@/icons/ui/back.svg';
import Menu from '@/icons/ui/menu.svg';
import Close from '@/icons/ui/close.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/**
 * Renders the mobile navigation component for a post page.
 * @returns {JSX.Element} The rendered mobile navigation component.
 */
export default function MobilePostNav() {
  const router = useRouter();

  return (
    <div className='flex items-center justify-between'>
      {/* back button */}
      <Back color='#a2afb9' className='w-8 h-8' onClick={() => router.back()} />

      <div className='flex items-center justify-end w-full gap-4'>
        {/* menu button */}
        <Link href='#menu'>
          <Menu color='#a2afb9' className='w-5 h-5' />
        </Link>

        {/* close button */}
        <Link href='/'>
          <Close color='#a2afb9' className='w-5 h-5' />
        </Link>
      </div>
    </div>
  );
}
