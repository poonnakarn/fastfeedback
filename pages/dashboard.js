import { useAuth } from '@/lib/auth'
import DashboardShell from '@/components/DashboardShell'
import EmptyState from '@/components/EmptyState'
import fetcher from '@/utils/fetcher'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import useSWR from 'swr'
import SiteTable from '@/components/SiteTable'

function DashBoard() {
  const { currentUser } = useAuth()
  const { data, error } = useSWR('/api/sites', fetcher)

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  )
}
export default DashBoard
