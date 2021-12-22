import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import dynamic from 'next/dynamic';

import '@fontsource/montserrat/100.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/900.css';

import '../styles/globals.css';

import Layout from '../components/Layout';
import { DrawerProvider } from '../context/DrawerContext';
const Drawer = dynamic(() => import('../components/Drawer'), {
  ssr: false,
});

const colors = {
  brand: {
    1: '#72D0CF',
    2: '#24325C',
    3: '#F4F6F9',
  },
};

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
});

const theme = extendTheme({
  colors,
  breakpoints,
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <DrawerProvider>
        <Layout>
          <Drawer />
          <Component {...pageProps} />
        </Layout>
      </DrawerProvider>
    </ChakraProvider>
  );
};

export default MyApp;
