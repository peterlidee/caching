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
      { label: 'dynamic + cache', route: '/cache/dynamic' },
    ],
  },
  {
    title: 'Chapter 5: time based revaldiation',
    links: [{ label: 'revalidate time', route: '/revalidateTime' }],
  },
  {
    title: 'Chapter 6: revalidatePath',
    links: [{ label: 'revalidate path tests', route: 'revalidatePath' }],
  },
  {
    title: 'Chapter 8: ISR',
    links: [{ label: 'ISR blog', route: '/blog' }],
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
                    <Link href={link.route} className='underline text-blue-500'>
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
