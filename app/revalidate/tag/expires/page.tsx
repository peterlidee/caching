import Post from '@/components/Post';
import RevalidateTagRouterButton from '@/components/revalidate/RevalidateTagRouterButton';

export default function page() {
  return (
    <>
      <div className='mb-8'>
        <Post postId={44} fetchOptions={{}} />
        <Post
          postId={45}
          fetchOptions={{ next: { revalidate: 1800, tags: ['post-45'] } }}
        />
        <Post postId={46} fetchOptions={{ cache: 'force-cache' }} />
      </div>
      <RevalidateTagRouterButton
        apiEndpoint='/revalidate/api/revalidateTag'
        tag='post-45'
        profile='expires'
      />
    </>
  );
}
