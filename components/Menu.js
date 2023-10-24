import Image from 'next/image';
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
import Close from '@/icons/ui/close.svg';

export default function Menu() {
  return (
    <div className='h-full container py-[var(--spacing)] flex flex-col gap-4'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex gap-4'>
          <Image
            src='/profile-pic.JPG'
            alt='Picture of Esteban'
            width={50}
            height={50}
            priority={true}
            className='rounded-full'
          />
          <h1 className='m-0'>Menu</h1>
        </div>

        <Link href='/'>
          <Close color='#a2afb9' className='w-5 h-5' />
        </Link>
      </div>

      <aside>
        <nav className='flex flex-col h-full gap-4'>
          <article className='p-0 m-0 overflow-hidden bg-muted/40'>
            <ul className='mx-0 divide-y'>
              {pages.map((page) => (
                <li
                  key={page.name}
                  className='border-[var(--muted-border-color)] hover:border-[var(--primary-hover)] focus:border-[var(--primary-focus)]'
                >
                  <Link
                    href={`/${page.name.toLowerCase()}#content`}
                    className='p-4 flex gap-1 items-center text-green hover:bg-[var(--primary-hover)] hover:text-coffee rounded-none'
                  >
                    {page.icon}
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <article className='p-0 m-0 overflow-hidden bg-muted/40'>
            <ul className='mx-0'>
              <li>
                <Link
                  href='http://disciplestoday.org/'
                  target='_blank'
                  className='p-4 flex gap-1 items-center text-green hover:bg-[var(--primary-hover)] hover:text-coffee rounded-none'
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
          </article>

          <article className='p-0 m-0 overflow-hidden bg-muted/40'>
            <ul className='mx-0'>
              {options.map((option) => (
                <li key={option.name}>
                  <Link
                    href={option.href}
                    className='p-4 flex gap-1 items-center text-green hover:bg-[var(--primary-hover)] hover:text-coffee rounded-none focus:bg-transparent'
                    target='_blank'
                  >
                    {option.icon}
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </nav>
      </aside>
    </div>
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
    href: 'https://1drv.ms/b/s!AumjDqvvmORqjYoaDPoBWBjPo294Og?e=06Rhd5',
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
