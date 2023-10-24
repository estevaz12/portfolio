'use client';

import Header from '@/components/Header';
import SkillCard from '@/components/SkillCard';
import Loading from '../loading';
import { useEffect, useState } from 'react';
import NoResults from '@/components/NoResults';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch('/api/skills/getWithProjectCount');
      const data = await response.json();
      setSkills(data.skills);
      setIsLoading(false);
    };

    fetchSkills();
  }, []);

  // necessary because it's a client component
  if (isLoading) return <Loading />;

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header title={'Skills'} isSearchEnabled setQuery={setQuery} />

      {filteredSkills.length === 0 ? (
        <NoResults />
      ) : (
        <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 animate-fade-in'>
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      )}
    </>
  );
}
