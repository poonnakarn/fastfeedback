import { db } from './firebase'
import { setDoc, doc, addDoc, collection, deleteDoc } from 'firebase/firestore'

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

export function createFeedback(newFeedback) {
  return addDoc(collection(db, 'feedback'), newFeedback)
}

export function deleteFeedback(id) {
  return deleteDoc(doc(db, 'feedback', id))
}
