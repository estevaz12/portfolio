'use client';

/**
 * Renders a search input field.
 *
 * @param {string} className - The CSS class name for the input field.
 * @param {function} setQuery - The function to set the search query value.
 * @return {JSX.Element} The search input component.
 */
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
