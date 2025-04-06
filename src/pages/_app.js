import React from 'react';
import "@/styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Product Data App</title>
        <meta name="description" content="Browse and shop a variety of products"/>
        <meta name="keywords" content="products, shopping, online store" />
        <meta property="og:title" content="Product Data App" />
        <meta property="og:description" content="Find the best products online!" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />;
    </Fragment>
  )
}
