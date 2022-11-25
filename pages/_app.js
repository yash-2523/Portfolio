import '../styles/globals.css';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Head from 'next/head';
import {Analytics} from "@vercel/analytics/react";

const options = {
  timeout: 1500,
  position: positions.BOTTOM_RIGHT
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider template={AlertTemplate} {...options}> 
      <Head>
        <title>Yash Doshi | Blockchain Developer</title>
        <meta charSet="utf-8" />
        <meta
        name="viewport"
        content="width=device-width, initial-scale=1, 
        shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  )
}

export default MyApp
