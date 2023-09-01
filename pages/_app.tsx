import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import { AnimatePresence } from "framer-motion";
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';
import { wrapper } from '../utils/store';

function App({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  
  const store = useStore();

  return( 
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <SessionProvider session={session}>
        <AnimatePresence>
            <Component {...pageProps} />
        </AnimatePresence>
      </SessionProvider>
    </PersistGate>
  )
}

export default wrapper.withRedux(App);

//export default App;
