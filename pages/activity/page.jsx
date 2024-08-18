'use client'

import { useState, useEffect } from 'react'
import { useStore } from '@/store'
import { getActivitiesByGoalId } from '@/lib/api'
import ActivityCard from '@/components/ActivityCard'
import { formatDate } from '@/lib/utils'

const Activity = () => {
  const [activities, setActivities] = useState([])
  const { user } = useStore()

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await getActivitiesByGoalId(user?.goals[0]?.id)
        const data = await response.json()
        setActivities(data.activities)
      } catch (error) {
        console.error(error)
      }
    }
    fetchActivities()
  }, [user])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-screen-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Activities</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Activity