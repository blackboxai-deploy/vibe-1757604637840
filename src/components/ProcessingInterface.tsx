'use client'

import { useState, useEffect } from 'react'
import { Progress } from '@/components/ui/progress'

interface ProcessingInterfaceProps {
  title: string
  description: string
  duration?: number // in milliseconds
}

export default function ProcessingInterface({
  title,
  description,
  duration = 3000
}: ProcessingInterfaceProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState('')

  const steps = [
    'Uploading files...',
    'Analyzing documents...',
    'Processing PDF...',
    'Optimizing output...',
    'Finalizing...'
  ]

  useEffect(() => {
    const stepDuration = duration / steps.length
    let currentStepIndex = 0

    const interval = setInterval(() => {
      if (currentStepIndex < steps.length) {
        setCurrentStep(steps[currentStepIndex])
        setProgress((currentStepIndex + 1) * (100 / steps.length))
        currentStepIndex++
      } else {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [duration, steps])

  return (
    <div className="text-center space-y-6 py-8">
      {/* Loading Animation */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl">📄</div>
          </div>
        </div>
      </div>

      {/* Title and Description */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Progress Bar */}
      <div className="max-w-md mx-auto space-y-2">
        <Progress value={progress} className="w-full h-2" />
        <p className="text-sm text-gray-500">{Math.round(progress)}% complete</p>
      </div>

      {/* Current Step */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-red-600">{currentStep}</p>
        
        {/* Processing Steps */}
        <div className="max-w-sm mx-auto">
          <div className="space-y-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-3 text-sm">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                  progress > (index * (100 / steps.length))
                    ? 'bg-green-500 text-white'
                    : progress > ((index - 1) * (100 / steps.length))
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-gray-300'
                }`}>
                  {progress > (index * (100 / steps.length)) && (
                    <div className="text-xs">✓</div>
                  )}
                </div>
                <span className={
                  progress > (index * (100 / steps.length))
                    ? 'text-green-700 font-medium'
                    : progress > ((index - 1) * (100 / steps.length))
                    ? 'text-red-600 font-medium'
                    : 'text-gray-500'
                }>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Processing Info */}
      <div className="max-w-md mx-auto p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="text-blue-600 mt-0.5">ℹ️</div>
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Please wait</p>
            <p>Your files are being processed securely. Do not close this page.</p>
          </div>
        </div>
      </div>
    </div>
  )
}