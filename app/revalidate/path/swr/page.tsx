import Post from '@/components/Post';
import RevalidatePathRouterButton from '@/components/revalidate/RevalidatePathRouterButton';

export default function page() {
  return (
    <>
      <div className='mb-8'>
        <Post postId={35} fetchOptions={{}} />
        <Post postId={36} fetchOptions={{ next: { revalidate: 1800 } }} />
        <Post postId={37} fetchOptions={{ cache: 'force-cache' }} />
      </div>
      <RevalidatePathRouterButton
        apiEndpoint='/revalidate/api/revalidatePath'
        routeToRevalidate='/revalidate/path/swr'
      />
    </>
  );
}
