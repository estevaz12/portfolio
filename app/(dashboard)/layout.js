import Link from 'next/link';
import Close from '@/icons/ui/close.svg';
import Sidebar from '@/components/Sidebar';
import Menu from '@/components/Menu';

export default function DashboardLayout({ children }) {
  return (
    <div className='container-fluid h-screen py-[var(--spacing)]'>
      <main className='sm:flex max-sm:flex-col h-full max-w-screen-xl mx-auto my-0 shadow rounded-[var(--border-radius)] overflow-hidden animate-fade-in'>
        <div
          id='menu'
          className='h-full overflow-hidden max-sm:flex max-sm:flex-col sm:flex-none md:basis-1/6 bg-coffee/80 backdrop-blur animate-fade-in'
        >
          <div className='flex items-center w-full px-4 my-2 sm:hidden'>
            <h1 className='m-0'>Menu</h1>
            <div className='flex items-center justify-end w-full gap-4'>
              <Link href='/'>
                <Close color='#a2afb9' className='w-5 h-5' />
              </Link>
            </div>
          </div>

          <div className='h-full sm:hidden'>
            <Menu />
          </div>

          <div className='hidden h-full sm:block'>
            <Sidebar />
          </div>
        </div>
        <div
          id='content'
          className='h-full sm:flex-auto md:basis-5/6 py-[var(--spacing)] container-fluid bg-coffee/75 backdrop-blur-sm overflow-y-scroll overflow-x-hidden animate-fade-in'
        >
          {children}
        </div>
      </main>
    </div>
  );
}
