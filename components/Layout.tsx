import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './shared/Footer';
import Header from './shared/Header';
import Drawer from './Drawer';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>Bombi Bank</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#51C6E4' />
        <meta name='msapplication-TileColor' content='#51C6E4' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <Header />
      <Drawer />

      {children}
      <Footer />
    </Box>
  );
};
export default Layout;
