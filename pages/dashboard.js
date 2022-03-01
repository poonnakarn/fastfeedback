import EmptyState from '@/components/EmptyState'
import { useAuth } from '@/lib/auth'
function DashBoard() {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return 'Loading...'
  }

  return <EmptyState />
}
export default DashBoard
