import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'

let db, auth

if (getApps().length === 0) {
  const adminApp = initializeApp({
    credential: cert({
      type: 'service_account',
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      private_key_id: process.env.NEXT_PUBLIC_ADMIN_PRIVATE_KEY_ID,
      private_key: process.env.NEXT_PUBLIC_ADMIN_PRIVATE_KEY,
      client_email: process.env.NEXT_PUBLIC_ADMIN_CLIENT_EMAIL,
      client_id: '102540014862904755993',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vv2nb%40fast-feedback-demo-81f36.iam.gserviceaccount.com',
    }),
  })
  db = getFirestore(adminApp)
  auth = getAuth(adminApp)
} else {
  db = getFirestore()
  auth = getAuth()
}

export { db, auth }
