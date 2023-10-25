// spinning loader
export default function Loading() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div aria-busy={true}></div>
    </div>
  );
}
