import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './shared/Footer';
import Header from './shared/Header';
import fixSrcWithBasePath from '../utils/fixSrcWithBasePath';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>Bombi Bank</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={fixSrcWithBasePath('/apple-touch-icon.png')}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href={fixSrcWithBasePath('/favicon-32x32.png')}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={fixSrcWithBasePath('/favicon-16x16.png')}
        />
        <link rel='manifest' href={fixSrcWithBasePath('/site.webmanifest')} />
        <link
          rel='mask-icon'
          href={fixSrcWithBasePath('/safari-pinned-tab.svg')}
          color='#51C6E4'
        />
        <meta name='msapplication-TileColor' content='#51C6E4' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='description' content='Bombi Bank' />
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};
export default Layout;
