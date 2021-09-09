import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import axios from 'axios'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(async () => {
    let response = await axios.get("http://dev-bt-backend-lb-645605424.ap-southeast-1.elb.amazonaws.com/api/types/");
    let data = response.data;
    console.log({ data })
  }, [])
  return <Component {...pageProps} />
}
export default MyApp
