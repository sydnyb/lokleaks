import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../lib/firebase'

export default function AdminPanel() {
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Loading...</p>
  if (!user) return <p>You must be logged in.</p>

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-5">Moderation Panel</h1>
      <p>Welcome, {user.email}</p>
    </div>
  )
}