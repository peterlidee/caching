import Post from '@/components/Post';

export default function page() {
  return (
    <div>
      <h2 className='font-bold mb-4'>Static route + cache options</h2>
      <Post postId={10} fetchOptions={{}} />
      <Post postId={11} fetchOptions={{ cache: 'force-cache' }} />
    </div>
  );
}
