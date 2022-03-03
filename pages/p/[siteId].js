import { getAllFeedback, getAllSites } from '@/lib/db-admin'

function SiteFeedback({ initialFeedback }) {
  return <div>SiteFeedback</div>
}
export default SiteFeedback

export async function getStaticProps(context) {
  const siteId = context.params.siteId

  const feedback = await getAllFeedback(siteId)
  return {
    props: {
      initialFeedback: feedback,
    },
  }
}
export async function getStaticPaths() {
  const sites = await getAllSites()
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
