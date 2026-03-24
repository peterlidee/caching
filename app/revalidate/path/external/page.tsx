import RevalidatePathRouterButton from '@/components/revalidate/RevalidatePathRouterButton';

export default function page() {
  return (
    <div>
      <h2 className='font-bold mb-4'>route handler calls revalidatePath</h2>
      <RevalidatePathRouterButton
        apiEndpoint='/revalidate/api/revalidatePath'
        routeToRevalidate='/revalidate/path/swr'
      />
    </div>
  );
}
