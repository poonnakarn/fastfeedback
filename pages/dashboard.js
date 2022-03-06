import { useAuth } from '@/lib/auth'
import DashboardShell from '@/components/DashboardShell'
import EmptyState from '@/components/EmptyState'
import fetcher from '@/utils/fetcher'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import useSWR from 'swr'
import SiteTable from '@/components/SiteTable'
import SiteTableHeader from '@/components/SiteTableHeader'

function DashBoard() {
  const { currentUser } = useAuth()
  const { data, error } = useSWR(
    currentUser ? ['/api/sites', currentUser.token] : null,
    fetcher
  ) // api returns { sites: [sites] }

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      <SiteTableHeader />
      {data.sites.length > 0 ? (
        <SiteTable sites={data.sites} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  )
}
export default DashBoard
