import Post from '@/components/Post';

export default function Page() {
  return (
    <>
      <Post postId={38} fetchOptions={{}} />
      <Post postId={39} fetchOptions={{ next: { revalidate: 1800 } }} />
      <Post postId={40} fetchOptions={{ cache: 'force-cache' }} />
    </>
  );
}
