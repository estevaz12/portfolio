export default function Search({ className }) {
  return (
    <input
      type='search'
      id='search'
      name='search'
      placeholder='Search by skill...'
      className={className}
    />
  );
}
