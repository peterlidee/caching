import Post from '@/components/Post';
import RevalidateTagRouterButton from '@/components/revalidate/RevalidateTagRouterButton';

export default function page() {
  return (
    <>
      <div className='mb-8'>
        <Post postId={41} fetchOptions={{}} />
        <Post
          postId={42}
          fetchOptions={{ next: { revalidate: 1800, tags: ['post-42'] } }}
        />
        <Post postId={43} fetchOptions={{ cache: 'force-cache' }} />
      </div>
      <RevalidateTagRouterButton
        apiEndpoint='/revalidate/api/revalidateTag'
        tag='post-42'
        profile='max'
      />
    </>
  );
}
