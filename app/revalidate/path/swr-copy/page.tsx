import Post from '@/components/Post';

export default function page() {
  return (
    <>
      <Post postId={35} fetchOptions={{}} />
      <Post postId={36} fetchOptions={{ next: { revalidate: 1800 } }} />
      <Post postId={37} fetchOptions={{ cache: 'force-cache' }} />
    </>
  );
}
