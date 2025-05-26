import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Rafael Tibudan - Software Developer"
        />
        <meta name="image" content="https://rafaeltibudan.xyz/rafael.webp" />
        <meta itemProp="name" content="Rafael" />
        <meta
          itemProp="description"
          content="Rafael Tibudan - Software Developer"
        />
        <meta itemProp="image" content="https://rafaeltibudan.xyz/rafael.webp" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Rafael Tibudan - Developer" />
        <meta
          name="twitter:description"
          content="Rafael Tibudan - Software Developer"
        />
        <meta name="twitter:site" content="@batangZestooo" />
        <meta name="twitter:creator" content="@batangZestooo" />
        <meta name="twitter:image:src" content="https://rafaeltibudan.xyz/rafael.webp" />
        <meta name="og:title" content="Rafael - Developer" />
        <meta
          name="og:description"
          content="Rafael Tibudan - Software Developer"
        />
        <meta name="og:image" content="https://rafaeltibudan.xyz/rafael.webp" />
        <meta name="og:url" content="https://rafaeltibudan.xyz/" />
        <meta name="og:site_name" content="Rafael Tibudan" />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/rafael.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
