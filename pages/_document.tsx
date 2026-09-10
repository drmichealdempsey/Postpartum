import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="A postpartum care and justice campaign supporting mothers, families, and care pathways before crisis escalates." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Postpartum Care Fund" />
        <meta property="og:description" content="Supporting mothers through screening, treatment access, and advocacy." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
