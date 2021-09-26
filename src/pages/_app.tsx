import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import ThemeProvider from '../components/Theme/ThemeProvider';
import GlobalStyle from '../styles/globals'
import LayoutIfPathRender from '../components/Layout/LayoutNotRenderPath';
import { ThemeProviderContext } from '../data/context/ThemeContext';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <Fragment>
      <Head>
        <title>JWS</title>
        <link href="/favicon.ico" rel="icon" />
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <ThemeProviderContext>
        <ThemeProvider>
          <CssBaseline />
          <GlobalStyle />
          <LayoutIfPathRender pathNotRenderLayout={['/login']}>
            <Component {...pageProps} />
          </LayoutIfPathRender>
        </ThemeProvider>
      </ThemeProviderContext>
    </Fragment>
  );
}
