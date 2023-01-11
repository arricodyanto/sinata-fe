import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, colors, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0ea5e9',
      light: '#38bdf8',
      dark: '#0284c7'
    }
  },
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    body2: {
      color: '#4b5563'
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
