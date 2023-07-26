import Sidebar from '@/components/Sidebar';

export default function UnlockedLayout({ children }) {
  return (
    <div className='container-fluid h-screen py-[var(--block-spacing-vertical)]'>
      <main className='flex h-full max-w-screen-xl mx-auto my-0 shadow rounded-[var(--border-radius)] overflow-hidden'>
        <div className='h-full overflow-hidden basis-1/6 bg-coffee/80 backdrop-blur'>
          <Sidebar />
        </div>
        <div className='h-full basis-5/6 py-[var(--spacing)] container-fluid bg-coffee/75 backdrop-blur-sm overflow-y-scroll overflow-x-hidden'>
          {children}
        </div>
      </main>
    </div>
  );
}
