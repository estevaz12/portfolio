import Image from 'next/image';

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
        <div className='text-white justify-self-end drop-shadow-sm'>
          Click or tap to unlock
        </div>
        <div className=''>Other stuff</div>
      </div>
    </div>
  );
}
