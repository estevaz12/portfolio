import StackSvg from './StackSvg';
import Link from 'next/link';

export default function SkillCard({ skill }) {
  return (
    <article className='m-0'>
      <div className='flex items-center gap-2 mb-[var(--typography-spacing-vertical)]'>
        <StackSvg skill={skill.id} className='w-8 h-8' />
        <h4 className='m-0'>{skill.name}</h4>
      </div>

      {/* TODO: link to projects page filtered by the skill */}
      <Link
        href='#'
        className='focus:bg-transparent focus:text-[var(--primary)] focus:no-underline hover:bg-transparent hover:text-[var(--primary)] hover:no-underline'
      >
        <span className='inline-block w-6 h-6 text-center text-white rounded-full bg-mid-blue'>
          {skill.projects}
        </span>{' '}
        <span className='focus:underline hover:underline'>
          {skill.projects === 1 ? 'Project' : 'Projects'}
        </span>
      </Link>
    </article>
  );
}
