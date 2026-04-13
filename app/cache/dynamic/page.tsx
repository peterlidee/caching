import Post from '@/components/Post';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <div>
      <h2 className='font-bold mb-4'>Dynamic route + cache options</h2>
      <Post postId={13} fetchOptions={{}} />
      <Post postId={14} fetchOptions={{ cache: 'no-store' }} />
      <Post postId={15} fetchOptions={{ cache: 'force-cache' }} />
    </div>
  );
}
