import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  list: []
}

const Busca = ({ list }: Props) => {
    const [searchText, setSearchText] = useState('');
    const [movieList, setMovieList] = useState([]);

    const handleSearch = async () => {
        if(searchText !== '') {
            const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
            const json = await result.json();

            setMovieList(json.list);
        }
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
          <Head>
              <title>NEXTJS</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className="text-6xl font-bold underline">
              Busca
          </h1>

          <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />

          <button onClick={handleSearch}>Buscar</button>

          <hr />

          <ul className="list-none m-0">
              {movieList.map((item: any) => (
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

export default Busca
