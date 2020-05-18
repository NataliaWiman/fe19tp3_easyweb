import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Presentation from "../Presentation/Presentation";
import Features from "../Features/Features";

const Layout = ({ data, menu, site }) => {
  return (
    <div className="layout__wrapper">
      <Navbar data={data} menu={menu} site={site} />
      <Hero data={data} />
      <Presentation data={data} />
      <Features data={data} />
    </div>
  );
};

export default Layout;
