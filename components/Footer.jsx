'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-16">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FitTrack. All rights reserved.
        </p>
        <Link href="/about" className="text-sm hover:underline">
          About
        </Link>
        <Link href="/privacy" className="text-sm hover:underline ml-4">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

export default Footer