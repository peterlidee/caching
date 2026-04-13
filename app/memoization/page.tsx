import User from '@/components/memoization/User';

export const dynamic = 'force-dynamic';

export default async function Page() {
  return (
    <>
      <User fetchOptions={{}} />
      <User fetchOptions={{}} />
      <User fetchOptions={{}} />
      <User fetchOptions={{}} />

      <User fetchOptions={{ cache: 'no-store' }} />
      <User fetchOptions={{ cache: 'no-store' }} />
      <User fetchOptions={{ cache: 'no-store' }} />
      <User fetchOptions={{ cache: 'no-store' }} />

      <User fetchOptions={{ cache: 'force-cache' }} />
      <User fetchOptions={{ cache: 'force-cache' }} />
      <User fetchOptions={{ cache: 'force-cache' }} />
      <User fetchOptions={{ cache: 'force-cache' }} />

      <User fetchOptions={{ next: { revalidate: 1000 } }} />
      <User fetchOptions={{ next: { revalidate: 1200 } }} />
      <User fetchOptions={{ next: { revalidate: 1400 } }} />
      <User fetchOptions={{ next: { revalidate: 1600 } }} />

      <User fetchOptions={{ next: { tags: ['user-1'] } }} />
      <User fetchOptions={{ next: { tags: ['user-1'] } }} />
      <User fetchOptions={{ next: { tags: ['user-2'] } }} />
      <User fetchOptions={{ next: { tags: ['user-2'] } }} />
    </>
  );
}
