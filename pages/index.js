import getEasywebData from "../easyweb-api";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

function Index({ data, menu, site, settings }) {
  console.log(site);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Open+Sans:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles settings={settings} />
      <Layout data={data} menu={menu} site={site} />
    </ThemeProvider>
  );
}

// This gets called on every request
export async function getServerSideProps(ctx) {
  // Simple example to illustrate token call
  //console.log(ctx.params.urlname);
  var data = await getEasywebData("/routes");
  var menu = await getEasywebData("/load/menu");
  var site = await getEasywebData("/load/site");
  var settings = await getEasywebData("/load/settings");

  return { props: { data, menu, site, settings } };
}

export default Index;
