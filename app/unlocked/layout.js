import Sidebar from '../components/Sidebar';

export default function UnlockedLayout({ children }) {
  return (
    <div className='container-fluid h-screen overflow-hidden py-[var(--block-spacing-vertical)]'>
      <div className='flex h-full max-w-screen-xl mx-auto my-0 shadow rounded-[var(--border-radius)]'>
        <div className='h-full basis-1/6 bg-coffee/90 backdrop-blur-sm'>
          <Sidebar />
        </div>
        <div className='h-full basis-5/6 pt-[var(--typography-spacing-vertical)] container-fluid bg-coffee/80 backdrop-blur-sm'>
          {children}
        </div>
      </div>
    </div>
  );
}
