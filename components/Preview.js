import StackSvg from './StackSvg';

export default function Preview({ stack }) {
  const skillWidth = (1 / stack.length) * 100;
  const totalOffset = stack.length - 1;

  return (
    <div className='flex items-center justify-center h-full bg-dark-blue'>
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
