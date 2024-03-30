// _app.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import App from 'next/app';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {

    console.log('App mounted');


    if (typeof window !== 'undefined') {
     
      console.log('Window width:', window.innerWidth);
    }
  }, []); 

  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  

  return { ...appProps };
};

export default MyApp;
