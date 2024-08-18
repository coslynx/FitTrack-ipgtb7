'use client'

import { useState } from 'react'
import { useStore } from '@/store'
import { updateUser } from '@/lib/api'
import { toast } from 'react-hot-toast'
import Image from 'next/image'

const UserProfile = ({ user, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedUser, setUpdatedUser] = useState({
    ...user,
  })

  const handleInputChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateUser(updatedUser)
      onUpdateProfile(updatedUser)
      setIsEditing(false)
      toast.success('Profile updated successfully!')
    } catch (error) {
      console.error(error)
      toast.error('Failed to update profile')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-48 h-48 rounded-full overflow-hidden">
        <Image
          src={user.image || '/images/default-profile.png'}
          alt="Profile Picture"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-700 mb-4">{user.email}</p>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={updatedUser.name}
            onChange={handleInputChange}
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={updatedUser.email}
            onChange={handleInputChange}
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </form>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Edit Profile
        </button>
      )}
    </div>
  )
}

export default UserProfile