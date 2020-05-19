import getEasywebData from "../easyweb-api";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

function Index({ data, menu, site, settings, test }) {
  console.dir(test, { depth: null });
  //console.log(test);
  // https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object

  return (
    <ThemeProvider theme={theme}>
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
      <Layout data={data} menu={menu} site={site} />
    </ThemeProvider>
  );
}

// This gets called on every request
export async function getServerSideProps(ctx) {
  // Simple example to illustrate token call
  //console.log(ctx.params.urlname);
  var data = await getEasywebData("/routes");
  var test = await getEasywebData("/load/webpage/22228");
  var menu = await getEasywebData("/load/menu");
  var site = await getEasywebData("/routes");
  // returns an array of alla sidor och puffar
  // var site = await getEasywebData("/types/webpages");
  // var site = await getEasywebData("/types/webpages/22228/webpages");
  var settings = await getEasywebData("/load/settings");

  return {
    props: {
      data,
      menu,
      site,
      settings,
      test,
    },
  };
}

export default Index;
