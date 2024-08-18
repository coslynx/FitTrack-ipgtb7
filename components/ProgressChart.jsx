'use client'

import { useState, useEffect } from 'react'
import { useStore } from '@/store'
import { getActivitiesByGoalId } from '@/lib/api'
import { Line } from 'react-chartjs-2'
import { CategoryScale, LineController, LineElement, PointElement, Title } from 'chart.js'

Chart.register(CategoryScale, LineController, LineElement, PointElement, Title)

const ProgressChart = ({ goal }) => {
  const { user } = useStore()
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await getActivitiesByGoalId(goal.id)
        const data = await response.json()
        setActivities(data.activities)
      } catch (error) {
        console.error(error)
      }
    }
    if (goal.id) {
      fetchActivities()
    }
  }, [goal.id])

  const data = {
    labels: activities.map((activity) => activity.createdAt.slice(0, 10)),
    datasets: [
      {
        label: goal.title,
        data: activities.map((activity) => activity.progress),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Progress Chart',
      },
    },
  }

  return (
    <div className="w-full">
      <Line data={data} options={options} />
    </div>
  )
}

export default ProgressChart