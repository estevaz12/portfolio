import StackSvg from './StackSvg';

/**
 * Render a skill card component.
 * @param {Object} skill - The skill object containing name, id, courses, and projects.
 * @returns {JSX.Element} - The rendered skill card.
 */
export default function SkillCard({ skill }) {
  return (
    <article className='flex flex-col justify-between m-0'>
      {/* Skill name and icon */}
      <div className='flex items-center gap-2 mb-[var(--typography-spacing-vertical)]'>
        <StackSvg skill={skill.id} className='w-8 h-8' />
        <h4 className='m-0'>{skill.name}</h4>
      </div>

      {/* Skill statistics */}
      <div className='flex flex-row-reverse justify-end gap-10 md:gap-2 md:flex-col md:justify-normal'>
        {skill.courses > 0 && (
          // Courses count
          <div>
            <span className='inline-block w-6 h-6 text-center rounded-full bg-green text-coffee'>
              {skill.courses}
            </span>{' '}
            <span>{skill.courses === 1 ? 'Course' : 'Courses'}</span>
          </div>
        )}

        {/* Projects count */}
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
