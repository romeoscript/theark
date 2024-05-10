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
{
    "address": "0x3feb73b8745e0412b4e15086aac503001b1272ae"
  },
  {
    "address": "0x6d0d19bdddc5ed1dd501430c9621dd37ebd9062d"
  },
  {
    "address": "0x4a401ee7fef089cd20d183fe2510d7bd38294728"
  },
  {
    "address": "0x54d58dab6e01f2f4a7769e53b60ca1866d85d00a"
  },
  {
    "address": "0xdbdb692ef06dfe10f609a9c0eab4b038d60b4243"
  },
  {
    "address": "0x732422a4afde3dae61657f0731ac1101b061918b"
  },
  {
    "address": "0xbb257625458a12374daf2ad0c91d5a215732f206"
  },
  {
    "address": "0x723EF61d28112CB2ED3fcA7Af806442b39c772c3"
  },
  {
 
export default MyApp;
