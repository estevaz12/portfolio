import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Menu from '@/components/Menu';

export default function DashboardLayout({ children }) {
  return (
    <div className='max-sm:px-0 container-fluid h-screen sm:py-[var(--spacing)]'>
      <main className='sm:flex max-sm:rounded-none max-sm:flex-col h-full max-w-screen-xl mx-auto my-0 shadow rounded-[var(--border-radius)] overflow-hidden animate-fade-in'>
        <div
          id='menu'
          className='h-full overflow-hidden max-sm:bg-coffee/60 sm:flex-none md:basis-1/6 bg-coffee/80 backdrop-blur animate-fade-in'
        >
          <div className='h-full sm:hidden'>
            <Menu />
          </div>

          <div className='hidden h-full sm:block'>
            <Sidebar />
          </div>
        </div>
        <div
          id='content'
          className='max-sm:bg-coffee/60 h-full sm:flex-auto md:basis-5/6 py-[var(--spacing)] container-fluid bg-coffee/75 backdrop-blur-sm overflow-x-hidden animate-fade-in'
        >
          {children}
        </div>
      </main>
    </div>
  );
}
