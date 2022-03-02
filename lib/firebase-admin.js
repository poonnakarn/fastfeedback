import { applicationDefault, initializeApp, getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
const serviceAccount = require('../service-account-file.json')

let db
if (!getApps().length) {
  const adminApp = initializeApp({
    credential: applicationDefault(serviceAccount),
  })
  db = getFirestore(adminApp)
}

export default db
