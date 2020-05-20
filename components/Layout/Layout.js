import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Presentation from "../Presentation/Presentation";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import SectionFour from "../SectionFour/SectionFour";

const Layout = ({ data, menu, site, contact }) => {
  return (
    <div className="layout__wrapper">
      <Navbar data={data} menu={menu} site={site} />
      <Hero data={data} />
      <Presentation data={data} />
      <Features data={data} />
      <SectionFour data={data} />
      <Footer data={data} contact={contact} />
    </div>
  );
};

export default Layout;
