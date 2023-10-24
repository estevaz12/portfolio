'use client';

import Header from '@/components/Header';
import PostsPageLayout from '@/components/PostsPageLayout';
import { skills } from '@/lib/skillsData';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/posts?page=projects`);
      const data = await response.json();
      setPosts(data.projects);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const stack = post.stack.split(',');
    const names = stack.map((skill) => skills[skill].name);

    const stackNames = names.join(',');

    return stackNames.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <Header title='Projects' isSearchEnabled setQuery={setQuery} />
      <PostsPageLayout page='projects' posts={filteredPosts} query={query} />
    </>
  );
}
