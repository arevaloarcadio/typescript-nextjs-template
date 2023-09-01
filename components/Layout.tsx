import TRANSITION from '../utils/transition' 
import { LazyMotion,domAnimation, m } from "framer-motion";
import HeaderP from './Header'

export const siteTitle = "Mi sitio web con next.js";

const pageMotionProps = {
  initial: {opacity: 0},
  animate: {
    opacity:1,
    transition:{
      duration: TRANSITION.DURATION,
      ease: TRANSITION.EASE
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0,
      delay: TRANSITION.DURATION,
      ease: TRANSITION.EASE
    }
  }
}

export default function Layout({ children, title} : any) {
  return (
     <>
      <HeaderP/>
      <LazyMotion features={domAnimation}>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
          </div>
        </header>
        <main>
          <m.div {...pageMotionProps} className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">{children}</m.div>
        </main>
      </LazyMotion>
    </>
  );
}

Layout.defaultProps = {
  title : "Inicio"
};