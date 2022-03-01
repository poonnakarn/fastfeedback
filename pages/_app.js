import { AuthProvider } from '@/lib/auth'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/styles/theme'
import '@/styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
