import dynamic from 'next/dynamic';

export default function StackSvg({
  skill,
  className = 'w-[var(--font-size)] h-[var(--font-size)]',
}) {
  const Svg = dynamic(() => import(`@/icons/skills/${skill}.svg`));
  return <Svg className={className} />;
}
