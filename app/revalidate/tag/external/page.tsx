import RevalidateTagRouterButton from '@/components/revalidate/RevalidateTagRouterButton';

export default function page() {
  return (
    <>
      <div className='mb-8'>
        <h2 className='font-bold mb-2'>
          revalidateTag(post-42, max) from route handler (SWR)
        </h2>
        <RevalidateTagRouterButton
          apiEndpoint='/revalidate/api/revalidateTag'
          tag='post-42'
          profile='max'
        />
      </div>
      <div className='mb-8'>
        <h2 className='font-bold mb-2'>
          revalidateTag(post-45, {'{ expire: 0 }'}) from route handler (RYOR)
        </h2>
        <RevalidateTagRouterButton
          apiEndpoint='/revalidate/api/revalidateTag'
          tag='post-45'
          profile='expire'
        />
      </div>
    </>
  );
}
