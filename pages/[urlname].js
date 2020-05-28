import getEasywebData from "../easyweb-api";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import SubPageHeader from "../components/SubPageHeader/SubPageHeader";

import { useRouter } from "next/router";

// https://stackoverflow.com/questions/43862600/how-to-get-query-string-parameters-from-url-in-next-js

const Page = ({ data, menu, site, settings, contact, omoss }) => {
  const router = useRouter();
  const { urlname } = router.query;
  console.log("current urlname: " + urlname);
  // console.log(data);
  return (
    <ThemeProvider theme={theme} omoss={omoss}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Open+Sans:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
      </Head>
      <GlobalStyles settings={settings} />
      <Navbar data={data} menu={menu} site={site} />
      {/* <div>
        <p>Page urlname: {data.urlname}</p>
        <p>Id: {data.id}</p>
        <p>{data.viewTemplate.label}</p>
      </div> */}
      <SubPageHeader data={data} />
      {urlname == "om-easyweb" ? <About omoss={omoss} /> : null}

      <Footer data={data} contact={contact} />
    </ThemeProvider>
  );
};

// This gets called on every request
export async function getServerSideProps(ctx) {
  // Simple example to illustrate token call
  //
  //var data = await getEasywebData("/load/layout");
  var data = await getEasywebData("/routes");
  var menu = await getEasywebData("/load/menu");
  var site = await getEasywebData("/load/site");
  var settings = await getEasywebData("/load/settings");
  var contact = await getEasywebData("/load/webpage/22211");
  var omoss = await getEasywebData("/load/webpage/22205");

  return { props: { data, menu, site, settings, contact, omoss } };
}

export default Page;
