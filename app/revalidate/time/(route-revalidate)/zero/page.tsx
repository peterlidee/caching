import Post from '@/components/Post';

export const revalidate = 0; // no-store

export default function page() {
  return (
    <>
      <Post postId={27} fetchOptions={{}} />
      <Post postId={28} fetchOptions={{ cache: 'force-cache' }} />
      <Post postId={29} fetchOptions={{ next: { revalidate: 50 } }} />
    </>
  );
}
