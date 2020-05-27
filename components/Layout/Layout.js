import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Presentation from "../Presentation/Presentation";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Coworkers from "../Coworkers/Coworkers";
import About from "../About/About";
import Service from "../Service/Service";
import Skills from "../Skills/Skills";

const Layout = ({ data, menu, site, contact }) => {
  return (
    <div className="layout__wrapper">
      <Navbar data={data} menu={menu} site={site} />
      <Hero data={data} />
      <Features data={data} />
      <Presentation data={data} />
      {/* <About data={data} /> */}
      <Service data={data} />
      <Skills data={data} />
      <Coworkers data={data} />
      <Footer data={data} contact={contact} />
    </div>
  );
};

export default Layout;
