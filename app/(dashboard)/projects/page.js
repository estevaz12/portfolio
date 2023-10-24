'use client';
'use client';
import Header from '@/components/Header';
import PostsPageLayout from '@/components/PostsPageLayout';
import { skills } from '@/lib/skillsData';
import { useState, useEffect } from 'react';
import Loading from '../loading';
import NoResults from '@/components/NoResults';

export default function Projects() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/posts?page=projects`);
      const data = await response.json();
      setPosts(data.projects);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  // necessary because it's a client component
  if (isLoading) return <Loading />;

  const filteredPosts = posts.filter((post) => {
    const stack = post.stack.split(',');
    const names = stack.map((skill) => skills[skill].name);

    const stackNames = names.join(',');

    return stackNames.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <Header title='Projects' isSearchEnabled setQuery={setQuery} />

      {filteredPosts.length === 0 ? (
        <NoResults />
      ) : (
        <PostsPageLayout page='projects' posts={filteredPosts} query={query} />
      )}
    </>
  );
}
