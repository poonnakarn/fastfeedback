import { getAllSites } from '@/lib/db-admin'
import db from '@/lib/firebase-admin'
// import { getFirestore } from 'firebase-admin/firestore'
// import { } from 'firebase-admin/firestore'
// import { setDoc, doc, addDoc, collection } from 'firebase/firestore'

export default async (_, res) => {
  const { sites, error } = await getAllSites()

  if (error) {
    res.status(500).json({ error })
  }

  res.status(200).json({ sites })
}
