'use client'

import { useState, useEffect } from 'react'
import { useStore } from '@/store'
import { getPostsByAuthorId, likePost, unlikePost, deletePost } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import Link from 'next/link'

const SocialCard = ({ post }) => {
  const { user } = useStore()
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setLiked(post.likes.includes(user?.id))
  }, [post.likes, user])

  const handleLike = async () => {
    try {
      await likePost(post.id)
      setLiked(true)
      toast.success('Post liked!')
    } catch (error) {
      console.error(error)
      toast.error('Failed to like post')
    }
  }

  const handleUnlike = async () => {
    try {
      await unlikePost(post.id)
      setLiked(false)
      toast.success('Post unliked!')
    } catch (error) {
      console.error(error)
      toast.error('Failed to unlike post')
    }
  }

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(post.id)
        toast.success('Post deleted!')
      } catch (error) {
        console.error(error)
        toast.error('Failed to delete post')
      }
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={post.author.image || '/images/default-profile.png'}
            alt="Profile Picture"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <Link href={`/profile/${post.author.id}`} className="font-bold">
          {post.author.name}
        </Link>
        <span className="text-gray-600">
          {formatDate(post.createdAt)}
        </span>
      </div>
      <p className="mt-2 text-gray-700">{post.content}</p>
      {post.image && (
        <Image
          src={post.image}
          alt="Post Image"
          width={500}
          height={300}
          className="rounded-md mt-4"
        />
      )}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={liked ? handleUnlike : handleLike}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ${
              liked ? 'bg-red-500 hover:bg-red-700' : ''
            }`}
          >
            {liked ? 'Unlike' : 'Like'}
          </button>
          <span className="text-gray-600">{post.likes.length} likes</span>
        </div>
        {post.author.id === user?.id && (
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default SocialCard