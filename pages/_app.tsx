import React from 'react'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { RecoilRoot } from 'recoil'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const theme = createTheme()
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Elements stripe={stripePromise}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Elements>
    </RecoilRoot>
  )
}

export default MyApp
