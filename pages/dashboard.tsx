import { useEffect, useState } from 'react'
import { db } from '../lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function DashboardPage() {
  const [complaints, setComplaints] = useState<any[]>([])

  useEffect(() => {
    const fetchComplaints = async () => {
      const querySnapshot = await getDocs(collection(db, 'complaints'))
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setComplaints(list)
    }

    fetchComplaints()
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Complaint Log</h1>
      <table className="w-full table-auto bg-gray-800 rounded overflow-hidden">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-3 text-left">Office</th>
            <th className="p-3 text-left">District</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c, i) => (
            <tr key={i} className="border-t border-gray-700 hover:bg-gray-700">
              <td className="p-3">{c.office}</td>
              <td className="p-3">{c.district}</td>
              <td className="p-3">{c.category}</td>
              <td className="p-3">{new Date(c.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}