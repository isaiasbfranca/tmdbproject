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
      <img key={item.id} src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="120" />
  ));

  const destaqueDia = listDay?.map((item: any) => (
      <img className="rounded-lg shadow-newShadow h-[calc(150px_*_1.5)] w-full" key={item.id} src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="120" />
));

  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="w-full h-[calc(100vh_/_2.5)] bg-background bg-cover">
        <div className="w-full h-full bg-primary-light flex items-center bg-opacity-50">
          <div className="px-10 py-8 w-full">
            <div className="mb-5 w-full">
              <h1 className="text-white font-sans font-bold antialiased text-5xl">Bem-Vindo(a).</h1>
              <span className="text-white font-sans font-semibold antialiased text-3xl">Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</span>
            </div>
            <div className="mt-8">
              <input className="w-full rounded-full h-11 pl-6" placeholder="Buscar por um Filme, Série ou Pessoa..." />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100vh_/_2.5)]">
        <div className="mt-8">
          <div className="mx-10">
            <h1 className="font-sans">Tendências</h1>
          </div>

          <div className="flex gap-x-8 pl-10 overflow-auto">
            {destaqueDia}
          </div>
        </div>
      </div>
      {/* <div>
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
      </div> */}

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
