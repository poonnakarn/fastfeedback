import { getAllSites } from '@/lib/db-admin'

export default async (req, res) => {
  console.log(req.headers)
  const { sites, error } = await getAllSites()

  if (error) {
    res.status(500).json({ error })
  }

  res.status(200).json({ sites })
}
