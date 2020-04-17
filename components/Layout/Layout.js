import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const Layout = ({ data, menu, site }) => {
  console.log(site.urlTemplates);
  return (
    <div className="layout__wrapper">
      <Navbar data={data} menu={menu} site={site} />
      <Hero data={data} />
    </div>
  );
};

export default Layout;
