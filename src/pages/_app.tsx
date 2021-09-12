import { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import GlobalStyle from '../styles/globals';
import { ThemeProviderContext } from '../data/context/ThemeContext'
import ThemeProvider from '../components/Theme/ThemeProvider'
import SelectWhatRendersWithLayout from '../components/Layout/SelectWhatRendersWithLayout';

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

