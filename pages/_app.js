import '../styles/global.css';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  
    return (<ThemeProvider><><Component {...pageProps} /><Analytics /></></ThemeProvider>);
}