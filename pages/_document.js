import { Html, Head, Main, NextScript } from "next/document"
import { getImagePath } from "../utils/imageLoader"

export default function Document() {
  const basePath = process.env.NODE_ENV === 'production' ? 'https://rafaeladriantibudan.github.io/rafael-2025' : '';
  
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Rafael Tibudan - Software Developer"
        />
        <meta name="image" content={`${basePath}/meta-og.png`} />
        <meta itemProp="name" content="Rafael" />
        <meta
          itemProp="description"
          content="Rafael Tibudan - Software Developer"
        />
        <meta itemProp="image" content={`${basePath}/meta-og.png`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Rafael Tibudan - Developer" />
        <meta
          name="twitter:description"
          content="Rafael Tibudan - Software Developer"
        />
        <meta name="twitter:site" content="@pixel_arts" />
        <meta name="twitter:creator" content="@pixel_arts" />
        <meta name="twitter:image:src" content={`${basePath}/meta-og.png`} />
        <meta name="og:title" content="Rafael - Developer" />
        <meta
          name="og:description"
          content="Rafael Tibudan - Software Developer"
        />
        <meta name="og:image" content={`${basePath}/meta-og.png`} />
        <meta name="og:url" content={basePath} />
        <meta name="og:site_name" content="Rafael" />
        <meta name="og:type" content="website" />
        <link rel="icon" href={`${basePath}/rafael.png`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
