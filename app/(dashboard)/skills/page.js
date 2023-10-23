'use client';

import Header from '@/components/Header';
import SkillCard from '@/components/SkillCard';
import { useEffect, useState } from 'react';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch('/api/skills');
      const data = await response.json();
      setSkills(data.skills);
    };

    fetchSkills();
  }, []);

  return (
    <>
      <Header title={'Skills'} isSearchEnabled setQuery={setQuery} />

      <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 animate-fade-in'>
        {skills
          .filter((skill) =>
            skill.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
      </div>
    </>
  );
}
