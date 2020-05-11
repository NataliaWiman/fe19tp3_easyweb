import getEasywebData from "../easyweb-api";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

const Page = ({ data, menu , site}) => {
  console.log("här");
  console.log(data);

  return (
<React.Fragment> 
    <ThemeProvider theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Open+Sans:wght@600&display=swap"
          rel="stylesheet"
        />
        
      </Head>
      <GlobalStyles />
      <Layout data={data} menu={menu} site={site} 
      />
    </ThemeProvider>
      <p>{data.label}</p>
          <p>{data.introduction}</p>
          <div className="content" dangerouslySetInnerHTML={{__html: data.contents}}></div>
               </React.Fragment>
  );
};

// This gets called on every request
export async function getServerSideProps(ctx) {
  // Simple example to illustrate token call

  var data = await getEasywebData("/routes/" + ctx.params.urlname);
  var menu = await getEasywebData("/load/menu");
  var site = await getEasywebData("/load/site");

  return { props: { data,menu, site} };
}

export default Page;
