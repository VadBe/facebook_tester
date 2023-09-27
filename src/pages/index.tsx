import { Inter } from 'next/font/google'
import { GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 10,
  }
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <h1 className='text-center'>FACEBOOK TEST PAGE</h1>
    </main>
  )
}
