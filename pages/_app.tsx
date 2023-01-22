import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0ea5e9',
      light: '#38bdf8',
      dark: '#0284c7',
      contrastText: "#ffffff",
    },
    success: {
      main: '#22c55e',
      contrastText: "#ffffff",
    },
    error: {
      main: '#ef4444',
      contrastText: "#ffffff",
    }
  },
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif"
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
