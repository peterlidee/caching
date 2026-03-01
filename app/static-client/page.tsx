import Header from '@/components/static/Header';
import Main from '@/components/static/Main';
import Footer from '@/components/static/Footer';
import ClientWithState from '@/components/client/ClientWithState';

export default async function page() {
  return (
    <>
      <ClientWithState />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
