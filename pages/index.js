import Head from 'next/head'
import Description from '../components/Description'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="w-full min-h-screen box-border px-[8%] overflow-hidden">
      <Head>
        <title>Playstation</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>
        <Description />
      </main>
      <Footer />
    </div>
  )
}
