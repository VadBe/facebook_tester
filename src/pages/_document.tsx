import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const origin =
      typeof window !== 'undefined' && window.location.origin
          ? window.location.origin
          : '';
  return (
    <Html lang="en">
      <Head>
        <meta name="facebook-domain-verification" content="7qoi7pzstxcgc2tuelu71cx569y3ez" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
