'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Still loading
    if (!session) router.push('/auth/signin')
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to your Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Hello, {session.user?.name || session.user?.email}!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors">
                  Start New Application
                </button>
                <button className="w-full bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors">
                  Upload Documents
                </button>
                <button className="w-full bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors">
                  Check Application Status
                </button>
              </div>
            </div>

            {/* Recent Applications */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Applications</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tourist Visa - Spain</span>
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                      Approved
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Applied: 2 days ago</p>
                </div>
                <div className="bg-white p-3 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Business Visa - UK</span>
                    <span className="text-sm text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                      In Review
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Applied: 5 days ago</p>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Assistant</h3>
              <p className="text-gray-600 mb-4">
                Need help with your visa application? Our AI assistant is here to help.
              </p>
              <button className="w-full bg-success text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                Start Chat
              </button>
            </div>
          </div>

          {/* Account Details */}
          <div className="mt-12 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <p className="text-gray-900">{session.user?.name || 'Not provided'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <p className="text-gray-900">{session.user?.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
                <p className="text-gray-900 capitalize">{session.user?.role || 'Customer'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                <p className="text-gray-900">Today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
