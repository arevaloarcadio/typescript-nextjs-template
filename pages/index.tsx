import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import styles from '../styles/Layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout
      title="Inicio"
    >
    </Layout>
  )
}
