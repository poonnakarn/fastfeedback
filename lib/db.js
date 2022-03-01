import { db } from './firebase'
import { setDoc, doc } from 'firebase/firestore'

export function createUser(uid, data) {
  return setDoc(
    doc(db, 'users', uid),
    {
      uid,
      ...data
    },
    { merge: true }
  )
}
