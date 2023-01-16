import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

interface Props {
  list: []
}

const Home = ({ list }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>NEXTJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-6xl font-bold">
        Seja bem vindo
      </h1>

    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();

  return {
    props: {
      list: json.list
    }
  }
}
