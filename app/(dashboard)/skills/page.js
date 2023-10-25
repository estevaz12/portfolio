'use client';

import Header from '@/components/Header';
import SkillCard from '@/components/SkillCard';
import Loading from '../loading';
import { useEffect, useState } from 'react';
import NoResults from '@/components/NoResults';

/**
 * Fetches skills data from the API and displays them in a grid.
 * Includes a search functionality to filter the skills by name.
 */
export default function Skills() {
  // State variables
  const [skills, setSkills] = useState([]); // Stores the skills data
  const [query, setQuery] = useState(''); // Stores the search query
  // Indicates if the data is still loading
  const [isLoading, setIsLoading] = useState(true);

  // Fetches the skills data from the API on component mount
  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch('/api/skills/getWithProjectCount');
      const data = await response.json();
      setSkills(data.skills);
      setIsLoading(false);
    };

    fetchSkills();
  }, []);

  // Display a loading skeleton while the data is loading
  // React Suspense isn't enough
  if (isLoading) return <Loading />;

  // Filter the skills based on the search query
  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Render the header with search functionality */}
      <Header title='Skills' isSearchEnabled setQuery={setQuery} />

      {/* Render the skills grid or a "no results" message */}
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
