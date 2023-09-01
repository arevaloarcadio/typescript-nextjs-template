import Layout from '../../components/Layout'
import Card from '../../components/Card'
import Link from 'next/link'
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Series({ series }) {
  return (
    <Layout
      title="Series"
    >
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Listado</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"></p>
        </div>
        <Card data={series} key="1"/>
      </div>
    </Layout>
  )
}


export async function getStaticProps() {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/films.json`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    }
  });
  
  const films = await res.json();
  
  const series = films.filter(film => {
    return film['Type'] == "series"
  })

  return { 
    props: { 
      series 
    }
  };
}