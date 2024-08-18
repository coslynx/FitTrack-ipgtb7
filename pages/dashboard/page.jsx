'use client'

import { useState, useEffect } from 'react'
import { useStore } from '@/store'
import { getActivitiesByGoalId } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import ActivityCard from '@/components/ActivityCard'
import GoalCard from '@/components/GoalCard'

const Dashboard = () => {
  const [goals, setGoals] = useState([])
  const [activities, setActivities] = useState([])
  const { user } = useStore()

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch('/api/goals')
        const data = await response.json()
        setGoals(data.goals)
      } catch (error) {
        console.error(error)
      }
    }
    fetchGoals()
  }, [])

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await getActivitiesByGoalId(goals[0]?.id)
        const data = await response.json()
        setActivities(data.activities)
      } catch (error) {
        console.error(error)
      }
    }
    fetchActivities()
  }, [goals])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-screen-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <GoalCard goal={goals[0]} />

          {goals.slice(1).map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center mt-8">Recent Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Dashboard