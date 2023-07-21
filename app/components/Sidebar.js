import Link from 'next/link';
import Projects from '../icons/projects.svg';
import Skills from '../icons/skills.svg';
import About from '../icons/about.svg';
import Contact from '../icons/contact.svg';
import OutLink from '../icons/out-link.svg';
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
              <li key={page.name}>
                <Link
                  href={`/unlocked/${page.name.toLowerCase()}`}
                  className='text-green hover:bg-[var(--primary-hover)] hover:text-coffee rounded-none pl-4'
                >
                  {page.icon} {page.name}
                </Link>
              </li>
            ))}
            <li>
              <hr />
            </li>
            <li>
              <Link
                href='#'
                className='text-green hover:bg-[var(--primary-hover)] hover:text-coffee rounded-none pl-4'
              >
                Church&nbsp;&nbsp;
                {
                  <OutLink
                    color='#54DEFD'
                    className='w-[var(--font-size)] h-[var(--font-size)]'
                  />
                }
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className='mx-0'>
            <li>
              <hr />
            </li>
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

const pages = [
  {
    name: 'Projects',
    icon: (
      <Projects
        color='#E2124D'
        className='w-[var(--font-size)] h-[var(--font-size)]'
      />
    ),
  },
  {
    name: 'Skills',
    icon: (
      <Skills
        color='#FFB10A'
        className='w-[var(--font-size)] h-[var(--font-size)]'
      />
    ),
  },
  {
    name: 'About',
    icon: (
      <About
        color='#CC4BC2'
        className='w-[var(--font-size)] h-[var(--font-size)]'
      />
    ),
  },
  {
    name: 'Contact',
    icon: (
      <Contact
        color='#F9EBE0'
        className='w-[var(--font-size)] h-[var(--font-size)]'
      />
    ),
  },
];

const options = [
  {
    name: 'Resume',
    href: '#',
    icon: <Resume color='#BF00FF' width='0.875em' height='0.875em' />,
  },
  {
    name: 'Español',
    href: '#',
    icon: <Lang color='#54DEFD' width='0.875em' height='0.875em' />,
  },
  {
    name: 'Theme',
    href: '#',
    icon: <Dark color='#FFB10A' width='0.875em' height='0.875em' />,
  },
];