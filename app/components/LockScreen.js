import Image from 'next/image';
import Resume from '../icons/resume.svg';
import Lang from '../icons/lang.svg';
import Dark from '../icons/dark.svg';
import Light from '../icons/light.svg';

export default function LockScreen() {
  return (
    <div className='flex items-end justify-center w-screen h-screen'>
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
              Esteban Vazquez Cardona
            </h1>
            <h4 className='text-white drop-shadow-sm'>
              Disciple ✝️ Husband 💍 Developer 🖥️
            </h4>
            <p className='text-white drop-shadow-sm'>
              ✅ Currently looking for contract work
            </p>
          </div>
        </div>
        <div className='text-center text-white'>
          <small className='drop-shadow-sm animate-pulse'>
            Click or tap to unlock
          </small>
        </div>
        <div className='text-center text-white'>
          <small>📄Resume &#x2022; 🌐Español &#x2022; 🌙Theme</small>
        </div>
      </div>
    </div>
  );
}
