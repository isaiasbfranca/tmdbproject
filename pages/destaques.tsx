import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

interface Props {
  list: []
}

const destaques = ({ list }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>NEXTJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-6xl font-bold underline">
        Filmes em destaque
      </h1>

      <ul className="list-none m-0">
        {list.map((item: any) => (
          <li className="inline-block m-5">
            <Link href={`/movie/${item.id}`}>
              <>
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /><br />
                {item.title}
              </>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default destaques

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();

  return {
    props: {
      list: json.list
    }
  }
}
