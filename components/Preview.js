import StackSvg from './StackSvg';

/**
 * Renders a preview of a stack of skills.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.stack - The stack of skills to display.
 * @returns {JSX.Element} - The rendered preview component.
 */
export default function Preview({ stack }) {
  // Calculate the width of each skill item
  const skillWidth = (1 / stack.length) * 100;

  // Calculate the total offset for positioning the skills
  const totalOffset = stack.length - 1;

  return (
    <div className='flex items-center justify-center h-full bg-dark-blue'>
      {/* Render each skill item */}
      {stack.map((skill, i) => (
        <div
          key={i}
          className={`inline-flex items-center justify-center w-[${skillWidth}%] bg-white rounded-full p-2 border-dark-blue border-4`}
          style={{ position: 'relative', right: `${i - totalOffset / 2}rem` }}
        >
          <StackSvg skill={skill} className='w-8 h-8' />
        </div>
      ))}
    </div>
  );
}
