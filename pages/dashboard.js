import DashboardShell from '@/components/DashboardShell'
import EmptyState from '@/components/EmptyState'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import { useAuth } from '@/lib/auth'
function DashBoard() {
  const { currentUser } = useAuth()

  return (
    <DashboardShell>
      {!currentUser ? <SiteTableSkeleton /> : <EmptyState />}
    </DashboardShell>
  )
}
export default DashBoard
