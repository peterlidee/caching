import Post from '@/components/Post';
import ActionRevalidateButton from '@/components/revalidate/ActionRevalidateButton';

export default function page() {
  return (
    <>
      <div className='mb-8'>
        <Post postId={38} fetchOptions={{}} />
        <Post postId={39} fetchOptions={{ next: { revalidate: 1800 } }} />
        <Post postId={40} fetchOptions={{ cache: 'force-cache' }} />
      </div>
      <ActionRevalidateButton routeToRevalidate='/revalidate/path/ryor' />
    </>
  );
}
