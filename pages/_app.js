import { AuthProvider } from '../lib/auth'
import { db } from '../lib/firebase'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log(db)

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
