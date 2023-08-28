'use client';

import Back from '@/icons/ui/back.svg';
import Menu from '@/icons/ui/menu.svg';
import Close from '@/icons/ui/close.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function MobilePostNav() {
  const router = useRouter();

  return (
    <div className='flex items-center justify-between'>
      <Back color='#a2afb9' className='w-8 h-8' onClick={() => router.back()} />

      <div className='flex items-center justify-end w-full gap-4'>
        <Link href='#menu'>
          <Menu color='#a2afb9' className='w-5 h-5' />
        </Link>

        <Link href='/'>
          <Close color='#a2afb9' className='w-5 h-5' />
        </Link>
      </div>
    </div>
  );
}
