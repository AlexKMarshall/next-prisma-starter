import Head from 'next/head'

import { HomeScreen } from 'src/modules/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeScreen />
    </>
  )
}
