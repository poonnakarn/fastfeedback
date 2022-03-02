import { db } from './firebase'
import { setDoc, doc, addDoc, collection } from 'firebase/firestore'

export function createUser(uid, data) {
  return setDoc(
    doc(db, 'users', uid),
    {
      uid,
      ...data,
    },
    { merge: true }
  )
}

export function createSite(data) {
  return addDoc(collection(db, 'sites'), data)
}
