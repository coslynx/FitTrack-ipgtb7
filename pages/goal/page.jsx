'use client'

import { useState, useEffect } from 'react'
import { useStore } from '@/store'
import { getGoalById } from '@/lib/api'
import GoalForm from '@/components/GoalForm'
import ProgressChart from '@/components/ProgressChart'
import { formatDate } from '@/lib/utils'

const Goal = () => {
  const [goal, setGoal] = useState(null)
  const { user } = useStore()

  useEffect(() => {
    const fetchGoal = async () => {
      try {
        const response = await getGoalById(user?.goals[0]?.id)
        const data = await response.json()
        setGoal(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchGoal()
  }, [user])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-screen-lg">
        {goal && (
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold mb-4 text-center">{goal.title}</h1>
            <p className="text-lg text-gray-700 text-center">{goal.description}</p>
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-lg font-bold">Target: {goal.target}</p>
              <p className="text-lg font-bold">Target Date: {formatDate(goal.targetDate)}</p>
            </div>
            <ProgressChart goal={goal} />
            <h2 className="text-2xl font-bold mt-8 text-center">Edit Goal</h2>
            <GoalForm goal={goal} />
          </div>
        )}
      </div>
    </main>
  )
}

export default Goal