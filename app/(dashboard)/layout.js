import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Menu from '@/components/Menu';

/**
 * Renders the Dashboard layout.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered.
 * @returns {JSX.Element} The rendered Dashboard layout.
 */
export default function DashboardLayout({ children }) {
  return (
    // Container
    <div className='max-sm:px-0 container-fluid h-screen sm:py-[var(--spacing)]'>
      <main className='sm:flex max-sm:rounded-none max-sm:flex-col h-full max-w-screen-xl mx-auto my-0 shadow rounded-[var(--border-radius)] overflow-hidden animate-fade-in'>
        {/* Menu */}
        <div
          id='menu'
          className='h-full overflow-hidden max-sm:bg-coffee/60 sm:flex-none md:basis-1/6 bg-coffee/80 backdrop-blur animate-fade-in'
        >
          <div className='h-full sm:hidden'>
            {/* Render Menu component if screen size is small */}
            <Menu />
          </div>

          <div className='hidden h-full sm:block'>
            {/* Render Sidebar component if screen size is not small */}
            <Sidebar />
          </div>
        </div>
        {/* Content */}
        <div
          id='content'
          className='max-sm:bg-coffee/60 h-full sm:flex-auto md:basis-5/6 py-[var(--spacing)] container-fluid bg-coffee/75 backdrop-blur-sm overflow-x-hidden animate-fade-in'
        >
          {/* Render the children components */}
          {children}
        </div>
      </main>
    </div>
  );
}
