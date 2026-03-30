import { getUser } from '@/app/memoization/getUser';

export default async function User({
  fetchOptions,
}: {
  fetchOptions: RequestInit;
}) {
  const user = await getUser(fetchOptions);
  if (!user) return <div>No user found</div>;
  return <div>{user.name}</div>;
}
