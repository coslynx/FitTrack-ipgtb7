'use client'

import { useState, useEffect } from 'react'
import { useStore } from '@/store'
import { getUserById } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import UserProfile from '@/components/UserProfile'
import { toast } from 'react-hot-toast'

const Settings = () => {
  const [user, setUser] = useState(null)
  const { updateUser } = useStore()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(user?.id)
        const data = await response.json()
        setUser(data)
      } catch (error) {
        console.error(error)
        toast.error('Failed to fetch user data')
      }
    }
    fetchUser()
  }, [])

  const handleUpdateProfile = async (updatedUser) => {
    try {
      await updateUser(updatedUser)
      setUser(updatedUser)
      toast.success('Profile updated successfully!')
    } catch (error) {
      console.error(error)
      toast.error('Failed to update profile')
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-screen-lg">
        {user && (
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Settings</h1>
            <UserProfile user={user} onUpdateProfile={handleUpdateProfile} />
          </div>
        )}
      </div>
    </main>
  )
}

export default Settings