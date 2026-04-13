import Header from '@/components/static/Header';
import Main from '@/components/static/Main';
import Footer from '@/components/static/Footer';

export default async function Page({
  searchParams,
}: PageProps<'/dynamic-example-route'>) {
  const resolvedSearchParams = await searchParams;
  return (
    <>
      <div>Hello {resolvedSearchParams.name}</div>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
