import Post from '@/components/Post';
import RevalidatePathActionButton from '@/components/revalidate/RevalidatePathActionButton';

export default function Page() {
  return (
    <>
      <div className='mb-8'>
        <Post postId={38} fetchOptions={{}} />
        <Post postId={39} fetchOptions={{ next: { revalidate: 1800 } }} />
        <Post postId={40} fetchOptions={{ cache: 'force-cache' }} />
      </div>
      <RevalidatePathActionButton routeToRevalidate='/revalidate/path/ryor' />
    </>
  );
}
