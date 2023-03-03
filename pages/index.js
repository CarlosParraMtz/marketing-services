import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Index from '../Components/Index/Index'

export default function Home() {
  return (
    <>
      <Head>
        <title>momentum</title>
        <meta name="description" content="Marketing digital y diseño web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>


        <Index />


      </main>
    </>
  )
}
