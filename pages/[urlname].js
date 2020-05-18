import getEasywebData from "../easyweb-api";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";

const Page = ({ data, menu, site, settings }) => {
  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Open+Sans:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles settings={settings} />
      <Navbar data={data} menu={menu} site={site} />
      <div>
        <p>Page urlname: {data.urlname}</p>
        <p>Id: {data.id}</p>
        <p>{data.viewTemplate.label}</p>
      </div>
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
  return { props: { data, menu, site, settings } };
}

export default Page;
