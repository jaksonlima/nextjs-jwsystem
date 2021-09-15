import { useEffect } from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

import GlobalStyle from '../styles/globals';
import { ThemeProviderContext } from '../data/context/ThemeContext'
import ThemeProvider from '../components/Theme/ThemeProvider'
import SelectWhatRendersWithLayout from '../components/Layout/SelectWhatRendersWithLayout';
import Layout from '../components/Layout_v2/Layout';

interface MyAppProps {
  Component: any,
  pageProps: any,
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>JWS</title>
        <link rel="icon" href="/image/jws.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <GlobalStyle />
      <ThemeProviderContext>
        <ThemeProvider>
          <CssBaseline />
          <SelectWhatRendersWithLayout>
            <Component {...pageProps} />
          </SelectWhatRendersWithLayout>
        </ThemeProvider>
      </ThemeProviderContext>
    </>
  );
}

