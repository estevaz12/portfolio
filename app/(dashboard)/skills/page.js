import Header from '@/components/Header';
import SkillCard from '@/components/SkillCard';
import { getSkillProjectCount } from '@/lib/skills';

const skills = getSkillProjectCount();

export default function Skills() {
  return (
    <>
      <Header title={'Skills'} isSearchEnabled={true} />

      <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-3 animate-fade-in'>
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </>
  );
}
