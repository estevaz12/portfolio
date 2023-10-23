'use client';

export default function Search({ className, setQuery }) {
  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <input
      type='search'
      id='search'
      name='search'
      placeholder='Search by skill...'
      className={className}
      onChange={handleChange}
    />
  );
}
