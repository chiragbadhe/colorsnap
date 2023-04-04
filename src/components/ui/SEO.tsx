import Head from "next/head";
import React from "react";

type Props = {};

function SEO({}: Props) {
  return (
    <Head>
      <title>colorsnap.</title>
      <meta
        name="description"
        content="Generate shades of any color using Tailwind CSS"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script async src="https://cdn.splitbee.io/sb.js"></script>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default SEO;
