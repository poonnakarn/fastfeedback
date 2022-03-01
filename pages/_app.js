import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/styles/theme'
import '@/styles/styles.css'
import AuthContextProvider from '@/lib/auth'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthContextProvider>
  )
}

export default MyApp
