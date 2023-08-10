export default function Loading() {
  return (
    <>
      <div className='flex w-full items-center mb-[var(--typography-spacing-vertical)] animate-pulse'>
        <h1 className='m-0 bg-white/10 rounded-[var(--border-radius)]'>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        </h1>
        <div className='flex items-center justify-end w-full gap-4'>
          <div className='w-6 h-6 bg-white/10 rounded-[var(--border-radius)]'></div>
        </div>
      </div>
      <div className='w-full h-full bg-white/10 animate-pulse rounded-[var(--border-radius)]'></div>
    </>
  );
}
