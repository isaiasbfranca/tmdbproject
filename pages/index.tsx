import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

interface Props {
  listWeek: [],
  listDay: [],
}

const Home = ({ listWeek, listDay }: Props) => {

  const destaqueSemana = listWeek?.map((item: any) => (
      <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="120" />
  ));

  const destaqueDia = listDay?.map((item: any) => (
    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="120" />
));

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>NEXTJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-6xl font-bold">
        Seja bem vindo
      </h1>

      <div>
        <h1>Destaques da semana</h1>
        <div className="flex gap-x-8 overflow-auto">
          {destaqueSemana}
        </div>
      </div>

      <div className="mt-10">
        <h1>Destaques da dia</h1>
        <div className="flex gap-x-8 overflow-auto">
          {destaqueDia}
        </div>
      </div>

    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const resWeek = await fetch('http://localhost:3000/api/trending');
  const resDay = await fetch('http://localhost:3000/api/trendingDay');
  
  const jsonWeek = await resWeek.json();
  const jsonDay = await resDay.json();

  return {
    props: {
      listWeek: jsonWeek.list,
      listDay: jsonDay.list,
    }
  }
}
