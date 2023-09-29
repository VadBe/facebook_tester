import { Inter } from "next/font/google";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = (async (context) => {
  const tr = String(context.query.tr);
  return { props: { tr } };
}) satisfies GetServerSideProps<{
  tr: string;
}>;

export default function Home({ tr }: { tr: string }) {
  return (
    <>
      <Head>
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="og:title" />
        <meta property="og:description" content="og:description" />
        <meta
          property="og:image"
          content={`https://ik.imagekit.io/vadimfacebooktest/a237fc26-287b-460c-afab-0e69adc81543.jpeg?${tr}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
      >
        <h1 className="text-center">FACEBOOK TEST PAGE</h1>
      </main>
    </>
  );
}
