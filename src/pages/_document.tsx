import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router';

export default function Document() {
  const origin =
      typeof window !== 'undefined' && window.location.origin
          ? window.location.origin
          : '';
  return (
    <Html lang="en">
      <Head>
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="og:title" />
        <meta property="og:description" content="og:description" />
        <meta property="og:image" content="https://ik.imagekit.io/snowstormtech/facebookcampaign/1695724406462_DfZWHW3Ves.jpg?tr=w-1200" />
        <meta property="og:image:width" content="1200" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
