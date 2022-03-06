import { useAuth } from '@/lib/auth'
import useSWR from 'swr'

import DashboardShell from '@/components/DashboardShell'
import EmptyState from '@/components/EmptyState'
import FeedbackTable from '@/components/FeedbackTable'
import fetcher from '@/utils/fetcher'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import FeedbackTableHeader from '@/components/FeedbackTableHeader'

function MyFeedback() {
  const { currentUser } = useAuth()
  const { data, error } = useSWR(
    currentUser ? ['/api/feedback', currentUser.token] : null,
    fetcher
  ) // api returns { sites: [sites] }

  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      <FeedbackTableHeader />
      {data.feedback ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  )
}
export default MyFeedback
