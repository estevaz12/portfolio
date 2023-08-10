import Link from 'next/link';
import Projects from '../icons/ui/projects.svg';
import Skills from '../icons/ui/skills.svg';
import About from '../icons/ui/about.svg';
import Contact from '../icons/ui/contact.svg';
import OutLink from '../icons/ui/out-link.svg';
import Resume from '../icons/ui/resume.svg';
import Lang from '../icons/ui/lang.svg';
import Dark from '../icons/ui/dark.svg';
import Light from '../icons/ui/light.svg';

export default function Sidebar() {
  return (
    <aside className='h-full'>
      <nav className='flex flex-col justify-between h-full py-2'>
        <div>
          <ul className='mx-0'>
            {pages.map((page) => (
              <li key={page.name}>
                <Link
                  href={`/${page.name.toLowerCase()}`}
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
                href='http://disciplestoday.org/'
                target='_blank'
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
                  className='text-green hover:bg-[var(--primary-hover)] hover:text-coffee rounded-none pl-4 focus:bg-transparent'
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
        color='#54DEFD'
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
    href: 'https://public.ph.files.1drv.com/y4m6zTWSNyy7dNPyvqby3GBc45OBdC_dbrXh5S2fus6GXZ_LaV9rWjzda0iOKFv5YVeCpiOWtqdcsys2yPrLbZwSME2mtmE_RiHuv4QOeQlLG22dOIYOEUaZdcqymuvO2wVZUPHlD5C6GeAzczY8oMbo339bQG1J6iUk2wlMdHgyhpj3F-poP6oUcg1hUZ2qn1j0M3IPcWAqbcRm7hyTp5Rp_f-lUaQORfIAa0C9LJVR-Y?AVOverride=1',
    icon: <Resume color='#E2124D' width='0.875em' height='0.875em' />,
  },
  // {
  //   name: 'Theme',
  //   href: '#',
  //   icon: <Dark color='#FFB10A' width='0.875em' height='0.875em' />,
  // },
  // {
  //   name: 'Español',
  //   href: '#',
  //   icon: <Lang color='#54DEFD' width='0.875em' height='0.875em' />,
  // },
];
