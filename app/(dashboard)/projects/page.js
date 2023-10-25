'use client';

import Header from '@/components/Header';
import PostsPageLayout from '@/components/PostsPageLayout';
import { skills } from '@/lib/skillsData';
import { useState, useEffect } from 'react';
import Loading from '../loading';
import NoResults from '@/components/NoResults';

/**
 * Function that renders the Projects page.
 * Fetches posts data from the API and displays them based on user search query.
 */
export default function Projects() {
  // State variables
  const [posts, setPosts] = useState([]); // Stores the fetched posts data
  const [query, setQuery] = useState(''); // Stores the user search query
  const [isLoading, setIsLoading] = useState(true); // Tracks loading state

  // Fetch posts data from the API on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/posts?page=projects`);
      const data = await response.json();
      setPosts(data.projects);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  // Display a loading skeleton while the data is loading
  // React Suspense isn't enough
  if (isLoading) return <Loading />;

  // Filter the posts based on the user search query
  const filteredPosts = posts.filter((post) => {
    const stack = post.stack.split(',');
    const names = stack.map((skill) => skills[skill].name);

    const stackNames = names.join(',');

    return stackNames.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      {/* Page header */}
      <Header title='Projects' isSearchEnabled setQuery={setQuery} />

      {/* Render either the 'NoResults' component or the posts */}
      {filteredPosts.length === 0 ? (
        <NoResults />
      ) : (
        <PostsPageLayout page='projects' posts={filteredPosts} query={query} />
      )}
    </>
  );
}
