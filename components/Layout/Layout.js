import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Presentation from "../Presentation/Presentation";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import FooterTwo from "../Footer/FooterTwo";

const Layout = ({ data, menu, site }) => {
  return (
    <div className="layout__wrapper">
      <Navbar data={data} menu={menu} site={site} />
      <Hero data={data} />
      <Presentation data={data} />
      <Features data={data} />
      <Footer data={data} />
      {/* <FooterTwo data={data} /> */}
    </div>
  );
};

export default Layout;
