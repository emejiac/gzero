import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeUIProvider } from 'theme-ui'
import Layout from '~/components/Layout'
import theme from '~/theme'
import '../public/styles/global.css'
import '../public/fonts/fonts.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* <script
        async
        type="text/javascript"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=V9eUkh"
      ></script> */}
      <ThemeUIProvider theme={theme}>
        <Layout pageProps={pageProps}>
          {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              @ts-ignore */}
          <Component {...pageProps} />
        </Layout>
      </ThemeUIProvider>
    </>
  )
}

export default MyApp
