import Header from '@/components/static/Header';
import Main from '@/components/static/Main';
import Footer from '@/components/static/Footer';
import ClientWithState from '@/components/client/ClientWithState';

export default async function Page() {
  return (
    <>
      <ClientWithState />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
