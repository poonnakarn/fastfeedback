import db from './firebase-admin'

export async function getAllFeedback(siteId) {
  const snapshot = await db
    .collection('feedback')
    .where('siteId', '==', siteId)
    .get()

  const feedback = []

  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() })
  })

  return feedback
}

export async function getAllSites() {
  const snapshot = await db.collection('sites').get()
  let sites = []

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() })
  })

  return sites
}
