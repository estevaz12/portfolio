import Sidebar from '../components/Sidebar';

export default function UnlockedLayout({ children }) {
  return (
    <div className='container-fluid h-screen overflow-hidden py-[var(--block-spacing-vertical)]'>
      <div className='flex h-full max-w-screen-xl mx-auto my-0 shadow bg-coffee rounded-[var(--border-radius)]'>
        <div className='h-full border-r basis-1/6'>
          <Sidebar />
        </div>
        <div className='h-full basis-5/6 pt-[var(--typography-spacing-vertical)] container-fluid'>
          {children}
        </div>
      </div>
    </div>
  );
}
