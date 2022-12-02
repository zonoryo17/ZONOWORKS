import Footer from './Footer'
import Header from './Header';

export const siteTitle = 'ZonoWorks';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}