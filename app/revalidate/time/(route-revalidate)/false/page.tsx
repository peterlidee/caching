import Post from '@/components/Post';

export const revalidate = false; // cache Infinity

export default function page() {
  return (
    <>
      <Post postId={24} fetchOptions={{}} />
      <Post postId={25} fetchOptions={{ cache: 'force-cache' }} />
      <Post postId={26} fetchOptions={{ next: { revalidate: 50 } }} />
    </>
  );
}
