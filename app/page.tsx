import Link from 'next/link';

const links = [
  { label: 'static example route', route: '/static-example-route' },
  {
    label: 'dynamic example route',
    route: '/dynamic-example-route?name=peter',
  },
  { label: 'static client', route: '/static-client' },
  { label: 'ISR blog', route: '/blog' },
];

export default function Home() {
  return (
    <>
      <h1 className='font-bold'>home</h1>
      <ul>
        {links.map((link) => (
          <li key={link.route}>
            <Link href={link.route} className='underline text-blue-500'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
