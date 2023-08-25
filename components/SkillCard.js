import StackSvg from './StackSvg';
import Link from 'next/link';

export default function SkillCard({ skill }) {
  return (
    <article className='flex flex-col justify-between m-0'>
      <div className='flex items-center gap-2 mb-[var(--typography-spacing-vertical)]'>
        <StackSvg skill={skill.id} className='w-8 h-8' />
        <h4 className='m-0'>{skill.name}</h4>
      </div>

      {/* TODO: link to projects page filtered by the skill */}
      <div className='flex flex-row-reverse justify-end gap-10 md:gap-2 md:flex-col md:justify-normal'>
        {skill.courses > 0 && (
          <div>
            <span className='inline-block w-6 h-6 text-center rounded-full bg-green text-coffee'>
              {skill.courses}
            </span>{' '}
            <span>{skill.courses === 1 ? 'Course' : 'Courses'}</span>
          </div>
        )}

        <div>
          <span className='inline-block w-6 h-6 text-center text-white rounded-full bg-mid-blue'>
            {skill.projects}
          </span>{' '}
          <span>{skill.projects === 1 ? 'Project' : 'Projects'}</span>
        </div>
      </div>
    </article>
  );
}
