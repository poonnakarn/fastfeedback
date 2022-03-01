import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA8dMgS_g2lrhLe_xvudzVoqAdoopUHulo',
  authDomain: 'fast-feedback-demo-81f36.firebaseapp.com',
  projectId: 'fast-feedback-demo-81f36',
  storageBucket: 'fast-feedback-demo-81f36.appspot.com',
  messagingSenderId: '961376869480',
  appId: '1:961376869480:web:2fbedf6eb97d5926846fdd'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
