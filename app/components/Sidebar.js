import Link from 'next/link';
import Resume from '../icons/resume.svg';
import Lang from '../icons/lang.svg';
import Dark from '../icons/dark.svg';
import Light from '../icons/light.svg';

export default function Sidebar() {
  return (
    <aside className='h-full'>
      <nav className='flex flex-col justify-between h-full py-2'>
        <div>
          <ul className='mx-0'>
            {pages.map((page) => (
              <li key={page}>
                <Link
                  href={`/unlocked/${page.toLowerCase()}`}
                  className='text-green hover:bg-[var(--primary-hover)] hover:text-coffee rounded-none pl-4'
                >
                  {page}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href='#'
                className='text-green hover:bg-[var(--primary-hover)] hover:text-coffee rounded-none pl-4 border-t border-[var(--muted-border-color)]'
              >
                Church
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <hr />
          <ul className='mx-0'>
            {options.map((option) => (
              <li key={option.name}>
                <Link
                  href={option.href}
                  className='text-green hover:bg-[var(--primary-hover)] hover:text-coffee rounded-none pl-4'
                >
                  <small>
                    {option.icon} {option.name}
                  </small>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}

const pages = ['Projects', 'Skills', 'About', 'Contact'];

const options = [
  {
    name: 'Resume',
    href: '#',
    icon: <Resume width='0.875em' height='0.875em' />,
  },
  {
    name: 'Español',
    href: '#',
    icon: <Lang width='0.875em' height='0.875em' />,
  },
  {
    name: 'Theme',
    href: '#',
    icon: <Dark width='0.875em' height='0.875em' />,
  },
];
