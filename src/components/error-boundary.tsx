'use client'

import React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
          <div className="max-w-xl w-full space-y-8 text-center">
            <div>
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Bir şeyler yanlış gitti
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Sayfayı yenilemeyi deneyin veya daha sonra tekrar ziyaret edin.
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#258535] hover:bg-[#1a6326] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#258535]"
            >
              Sayfayı Yenile
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
} 