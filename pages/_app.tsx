import React from 'react'
import { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
//import '../styles/globals.css'
import '../styles.css'

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />
}

export default App
