import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import styles from '../styles/Layout.module.css'
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import { selectFilmsState } from "../utils/slice";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const filmsViews = useSelector(selectFilmsState);
  
  let seriesMostViews:any = [];
  let moviesMostViews:any = [];

  filmsViews.forEach((film:any) =>{
    if(film.data['Type'] == 'series'){
      seriesMostViews.push(film.data)
    }
    if(film.data['Type'] == 'movie'){
      moviesMostViews.push(film.data)
    }
  })

  return (
    <Layout
      title="Inicio"
    >
      <div className='row'>
        <div className='col-6'>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Listado de Series mas vistas</h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"></p>
            </div>
            <Card data={seriesMostViews} key="1"/>
          </div>
        </div> 
        <div className='col-6'>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Listado de Peliculas mas vistas</h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"></p>
            </div>
            <Card data={moviesMostViews} key="2"/>
          </div>
        </div> 
      </div>
    </Layout>
  )
}

