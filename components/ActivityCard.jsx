'use client'

import { useState, useEffect } from 'react'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'

const ActivityCard = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-2">{activity.title}</h2>
      <p className="text-gray-700 mb-2">
        {formatDate(activity.createdAt)}
      </p>
      {activity.description && (
        <p className="text-gray-700 mb-4">{activity.description}</p>
      )}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={activity.goal.image || '/images/default-goal.png'}
            alt="Goal Image"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="text-gray-700 font-bold">{activity.goal.title}</p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <p className="text-gray-700 font-bold">Progress:</p>
        <p className="text-gray-700">{activity.progress}%</p>
      </div>
    </div>
  )
}

export default ActivityCard