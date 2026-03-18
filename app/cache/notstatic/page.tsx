import Post from '@/components/Post';

export default function page() {
  return (
    <div>
      <h2 className='font-bold mb-4'>
        Dynamic element in static route + cache options
      </h2>
      <Post postId={12} fetchOptions={{ cache: 'no-store' }} />
    </div>
  );
}
