// import Navigation from './Navigation';
// import Footer from './Footer';
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, locale, locales, defaultLocale }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
