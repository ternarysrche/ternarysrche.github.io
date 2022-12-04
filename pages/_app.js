import '../styles/global.css';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
export default function App({ Component, pageProps }) {
  
    return (<><Component {...pageProps} /><Analytics /></>);
}