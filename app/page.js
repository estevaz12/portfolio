import Image from 'next/image';
import Resume from '@/icons/ui/resume.svg';
import Lang from '@/icons/ui/lang.svg';
import Dark from '@/icons/ui/dark.svg';
import Light from '@/icons/ui/light.svg';
import Link from 'next/link';
import Cross from '@/emojis/latin_cross.svg';
import Ring from '@/emojis/ring.svg';
import Desktop from '@/emojis/desktop_computer.svg';
import Check from '@/emojis/check_mark_button.svg';

export default function LockScreen() {
  return (
    <div className='flex items-end justify-center w-screen h-screen animate-[fade_3s_ease-in-out_1]'>
      <div className='flex flex-col items-center justify-around h-2/3'>
        <div className='flex gap-4'>
          <Image
            src='/profile-pic.JPG'
            alt='Picture of Esteban'
            width={200}
            height={200}
            priority={true}
            className='rounded-full shadow w-28 h-28'
          />
          <div className='space-y-0'>
            <h1 className='m-0 text-white drop-shadow-sm'>
              Esteban Vázquez Cardona
            </h1>
            <h4 className='text-white drop-shadow-sm'>
              Disciple{' '}
              <Cross className='w-[var(--font-size)] h-[var(--font-size)]' />{' '}
              Husband{' '}
              <Ring className='w-[var(--font-size)] h-[var(--font-size)]' />{' '}
              Developer{' '}
              <Desktop className='w-[var(--font-size)] h-[var(--font-size)]' />
            </h4>
            <p className='text-white drop-shadow-sm'>
              <Check className='w-[var(--font-size)] h-[var(--font-size)]' />{' '}
              Currently looking for work
            </p>
          </div>
        </div>

        <div className='text-center'>
          <Link
            href='/projects'
            className='text-white hover:no-underline focus:no-underline focus:bg-transparent'
          >
            <small className='drop-shadow-sm animate-pulse'>
              Click or tap here to unlock
            </small>
          </Link>
        </div>

        <div className='text-center'>
          <Option
            href='https://public.ph.files.1drv.com/y4m6zTWSNyy7dNPyvqby3GBc45OBdC_dbrXh5S2fus6GXZ_LaV9rWjzda0iOKFv5YVeCpiOWtqdcsys2yPrLbZwSME2mtmE_RiHuv4QOeQlLG22dOIYOEUaZdcqymuvO2wVZUPHlD5C6GeAzczY8oMbo339bQG1J6iUk2wlMdHgyhpj3F-poP6oUcg1hUZ2qn1j0M3IPcWAqbcRm7hyTp5Rp_f-lUaQORfIAa0C9LJVR-Y?AVOverride=1'
            name='Resume'
          >
            <Resume className='w-[var(--font-size)] h-[var(--font-size)]' />
          </Option>
          {/* &emsp;
          <Option href='#' name='Theme'>
            <Dark className='w-[var(--font-size)] h-[var(--font-size)]' />
          </Option>
          &emsp;
          <Option href='#' name='Español'>
            <Lang className='w-[var(--font-size)] h-[var(--font-size)]' />
          </Option> */}
        </div>
      </div>
    </div>
  );
}

function Option({ href, children, name }) {
  return (
    <Link
      href={href}
      className='flex items-center text-white/70 hover:no-underline focus:bg-transparent'
    >
      <small className='drop-shadow-sm hover:text-white/100'>
        {children} {name}
      </small>
    </Link>
  );
}
