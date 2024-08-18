'use client'

import { useState, useEffect } from 'react'
import { useStore } from '@/store'
import { getActivitiesByGoalId } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const GoalCard = ({ goal }) => {
  const { user } = useStore()
  const [activities, setActivities] = useState([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await getActivitiesByGoalId(goal.id)
        const data = await response.json()
        setActivities(data.activities)
        const totalProgress = data.activities.reduce((acc, activity) => acc + activity.progress, 0)
        setProgress(Math.round(totalProgress / data.activities.length))
      } catch (error) {
        console.error(error)
      }
    }
    if (goal.id) {
      fetchActivities()
    }
  }, [goal.id])

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Link href={`/goal`} className="text-xl font-bold mb-2">
        {goal.title}
      </Link>
      <p className="text-gray-700 mb-2">
        {formatDate(goal.targetDate)}
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={goal.image || '/images/default-goal.png'}
            alt="Goal Image"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="text-gray-700 font-bold">{goal.target}</p>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <p className="text-gray-700 font-bold">Progress:</p>
        <p className="text-gray-700">{progress}%</p>
      </div>
    </div>
  )
}

export default GoalCard