import db from '@/lib/firebase-admin'
// import { getFirestore } from 'firebase-admin/firestore'
// import { } from 'firebase-admin/firestore'
// import { setDoc, doc, addDoc, collection } from 'firebase/firestore'

export default async (_, res) => {
  const snapshot = await db.collection('sites').get()
  let sites = []

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() })
  })

  res.status(200).json(sites)
}
