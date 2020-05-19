import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Presentation from "../Presentation/Presentation";
import Features from "../Features/Features";
import About from "../About/About";
import Service from "../Service/Service";

const Layout = ({ data, menu, site, features }) => {
  return (
    <div>
      <Navbar data={data} menu={menu} site={site} />
      <Hero data={data} />
      <Presentation data={data} />
      <Features data={data} features={features} />
      <About data={data} />
      <Service data={data} />
    </div>
  );
};

export default Layout;
