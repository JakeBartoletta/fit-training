import Navbar from '@/components/modules/Navbar/Navbar'
import type { AppProps } from 'next/app'
import React from 'react'
import '@/assets/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}
