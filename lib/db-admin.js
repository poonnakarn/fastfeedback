import { compareDesc, parseISO } from 'date-fns'

import { db } from './firebase-admin'

// return object with key=feedback[] or key=error
export async function getAllFeedback(siteId) {
  try {
    const snapshot = await db
      .collection('feedback')
      .where('siteId', '==', siteId)
      .get()

    const feedback = []

    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() })
    })

    feedback.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    )

    return { feedback }
  } catch (error) {
    return { error }
  }
}

export async function getAllSites() {
  try {
    const snapshot = await db.collection('sites').get()
    let sites = []

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() })
    })

    return { sites }
  } catch (error) {
    return { error }
  }
}

export async function getUserSites(userId) {
  const snapshot = await db
    .collection('sites')
    .where('authorId', '==', userId)
    .get()
  let sites = []

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() })
  })

  return { sites }
}

export async function getUserFeedback(userId) {
  const snapshot = await db
    .collection('feedback')
    .where('authorId', '==', userId)
    .get()
  let feedback = []

  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() })
  })

  return { feedback }
}
