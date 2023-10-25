import dynamic from 'next/dynamic';

/**
 * Render a SVG icon for a specific skill.
 * @param {Object} props - The props object.
 * @param {string} props.skill - The name of the skill.
 * @param {string} props.className - The class name for the SVG element.
 * @returns {JSX.Element} - The SVG element.
 */
export default function StackSvg({
  skill,
  className = 'w-[var(--font-size)] h-[var(--font-size)]',
}) {
  // Dynamically import the SVG icon based on the skill name
  const Svg = dynamic(() => import(`@/icons/skills/${skill}.svg`));

  return <Svg className={className} />;
}
