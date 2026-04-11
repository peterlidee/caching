import Link from 'next/link';

const chapters = [
  {
    title: 'Chapter 2: static and dynamic routes',
    links: [
      { label: 'static example route', route: '/static-example-route' },
      {
        label: 'dynamic example route',
        route: '/dynamic-example-route?name=peter',
      },
    ],
  },
  {
    title: 'Chapter 3: client components',
    links: [{ label: 'static client', route: '/static-client' }],
  },
  {
    title: 'Chapter 4: data cache',
    links: [
      { label: 'static + cache', route: '/cache/static' },
      { label: 'dynamic element in static + cache', route: '/cache/notstatic' },
      { label: 'dynamic + cache', route: '/cache/dynamic' },
    ],
  },
  {
    title: 'Chapter 6: time based revaldiation',
    links: [
      { label: 'static example', route: '/revalidate/time/static' },
      { label: 'dynamic example', route: '/revalidate/time/dynamic' },
      {
        label: 'route revalidate number',
        route: '/revalidate/time/number',
      },
      {
        label: 'route revalidate false',
        route: '/revalidate/time/false',
      },
      { label: 'route revalidate 0', route: '/revalidate/time/zero' },
      { label: 'swr example', route: '/revalidate/time/swr' },
    ],
  },
  {
    title: 'Chapter 7: revalidatePath',
    links: [
      { label: 'swr test', route: 'revalidate/path/swr' },
      { label: 'swr test copy', route: 'revalidate/path/swr-copy' },
      { label: 'ryor test', route: 'revalidate/path/ryor' },
      { label: 'ryor test copy', route: 'revalidate/path/ryor-copy' },
    ],
  },
  {
    title: 'Chapter 8: revalidateTag and updateTag',
    links: [
      { label: 'revalidateTag with max', route: 'revalidate/tag/max' },
      {
        label: 'revalidateTag with expires 0',
        route: 'revalidate/tag/expire',
      },
      { label: 'updateTag', route: 'revalidate/tag/updateTag' },
      { label: 'updateTag copy', route: 'revalidate/tag/updateTag-copy' },
    ],
  },
  {
    title: 'Chapter 9: ISR',
    links: [{ label: 'ISR blog', route: '/blog' }],
  },
  {
    title: 'Chapter 10: Router cache and request memoization',
    links: [{ label: 'request memoization test', route: '/memoization' }],
  },
  {
    title: 'Chapter 11: Suspense',
    links: [
      { label: 'static', route: '/suspense/static' },
      { label: 'updateTag', route: '/suspense/updateTag' },
      { label: 'dynamic', route: '/suspense/dynamic' },
    ],
  },
];

export default function Home() {
  return (
    <>
      <h1 className='text-xl font-bold mb-4'>home</h1>
      <div>
        {chapters.map((chapter) => {
          return (
            <div key={chapter.title} className='mb-4'>
              <h2>{chapter.title}</h2>
              <ul>
                {chapter.links.map((link) => (
                  <li key={link.route}>
                    <Link
                      href={link.route}
                      className='underline text-blue-500'
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
