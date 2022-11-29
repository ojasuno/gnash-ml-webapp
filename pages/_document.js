import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="GNASH ML" key="title"/>
        <meta property="og:description" content="generate lyrics for your CyberBroker" key="description"/>
        <meta
          property="og:image"
          content="../assets/gnash-ml.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
