'use client'

import { useState, useEffect } from 'react'
import { useStore } from '@/store'
import { getPostsByAuthorId, createPost, likePost, unlikePost, deletePost } from '@/lib/api'
import PostCard from '@/components/PostCard'
import { formatDate } from '@/lib/utils'
import { toast } from 'react-hot-toast'
import AddPostForm from '@/components/AddPostForm'

const Social = () => {
  const [posts, setPosts] = useState([])
  const { user } = useStore()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPostsByAuthorId(user?.id)
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error(error)
        toast.error('Failed to fetch posts')
      }
    }
    if (user) {
      fetchPosts()
    }
  }, [user])

  const handleCreatePost = async (postContent) => {
    try {
      const response = await createPost(postContent)
      const newPost = await response.json()
      setPosts([newPost, ...posts])
      toast.success('Post created successfully!')
    } catch (error) {
      console.error(error)
      toast.error('Failed to create post')
    }
  }

  const handleLikePost = async (postId) => {
    try {
      const response = await likePost(postId)
      if (response.ok) {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
          )
        )
        toast.success('Post liked!')
      }
    } catch (error) {
      console.error(error)
      toast.error('Failed to like post')
    }
  }

  const handleUnlikePost = async (postId) => {
    try {
      const response = await unlikePost(postId)
      if (response.ok) {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId ? { ...post, likes: post.likes - 1 } : post
          )
        )
        toast.success('Post unliked!')
      }
    } catch (error) {
      console.error(error)
      toast.error('Failed to unlike post')
    }
  }

  const handleDeletePost = async (postId) => {
    try {
      const response = await deletePost(postId)
      if (response.ok) {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId))
        toast.success('Post deleted!')
      }
    } catch (error) {
      console.error(error)
      toast.error('Failed to delete post')
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-screen-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Social Feed</h1>
        <div className="flex flex-col items-center justify-center gap-4">
          <AddPostForm onCreatePost={handleCreatePost} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onLike={handleLikePost}
                onUnlike={handleUnlikePost}
                onDelete={handleDeletePost}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Social