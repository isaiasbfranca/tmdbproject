import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

interface Props {
    info: any
  }

const MovieItem = ({ info }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>NEXTJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-6xl font-bold underline">
        {info.title}
      </h1>

      <p>Nota: {info.vote_average}</p>

      <p>{info.overview}</p>

      <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="400" />

    </div>
  )
}

export default MovieItem

export async function getServerSideProps(context: any) {
  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
  const json = await res.json();

  return {
    props: {
      info: json.info
    }
  }
}
