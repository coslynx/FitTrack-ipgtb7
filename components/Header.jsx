'use client'

import Link from 'next/link'
import { useStore } from '@/store'
import { signOut } from 'next-auth/react'

const Header = () => {
  const { user } = useStore()

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          FitTrack
        </Link>

        <ul className="flex gap-4">
          {user ? (
            <>
              <Link href="/dashboard" className="hover:text-gray-600">
                Dashboard
              </Link>
              <Link href="/goal" className="hover:text-gray-600">
                Goals
              </Link>
              <Link href="/activity" className="hover:text-gray-600">
                Activities
              </Link>
              <Link href="/social" className="hover:text-gray-600">
                Social
              </Link>
              <Link href="/settings" className="hover:text-gray-600">
                Settings
              </Link>
              <button
                onClick={() => signOut({ redirect: false })}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-gray-600">
                Login
              </Link>
              <Link href="/signup" className="hover:text-gray-600">
                Signup
              </Link>
            </>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header