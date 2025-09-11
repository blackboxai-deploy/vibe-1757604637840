'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void
  accept?: string
  multiple?: boolean
  maxFiles?: number
  maxSize?: number // in MB
}

export default function FileUpload({
  onFilesSelected,
  accept = "*",
  multiple = true,
  maxFiles = 10,
  maxSize = 25
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const validateFiles = (files: FileList) => {
    const validFiles: File[] = []
    const errors: string[] = []

    if (files.length > maxFiles) {
      errors.push(`Maximum ${maxFiles} files allowed`)
      return { validFiles: [], errors }
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      
      // Check file size
      if (file.size > maxSize * 1024 * 1024) {
        errors.push(`${file.name} is too large (max ${maxSize}MB)`)
        continue
      }

      // Check file type
      if (accept !== "*") {
        const acceptedTypes = accept.split(',').map(type => type.trim())
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
        const mimeType = file.type

        if (!acceptedTypes.some(type => 
          type === mimeType || type === fileExtension || type === "*"
        )) {
          errors.push(`${file.name} is not a supported file type`)
          continue
        }
      }

      validFiles.push(file)
    }

    return { validFiles, errors }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    setUploadError(null)

    const files = e.dataTransfer.files
    const { validFiles, errors } = validateFiles(files)

    if (errors.length > 0) {
      setUploadError(errors.join(', '))
      return
    }

    if (validFiles.length > 0) {
      onFilesSelected(validFiles)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    setUploadError(null)
    const { validFiles, errors } = validateFiles(files)

    if (errors.length > 0) {
      setUploadError(errors.join(', '))
      return
    }

    if (validFiles.length > 0) {
      onFilesSelected(validFiles)
    }
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  const getAcceptText = () => {
    if (accept === ".pdf") return "PDF files"
    if (accept.includes("image")) return "Image files"
    if (accept === ".doc,.docx") return "Word documents"
    return "files"
  }

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
          isDragOver
            ? 'border-red-500 bg-red-50'
            : 'border-gray-300 hover:border-red-400 hover:bg-red-50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="space-y-4">
          <div className="text-4xl">📁</div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {isDragOver ? 'Drop files here' : `Select ${getAcceptText()}`}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Drag and drop your files here, or click to browse
            </p>
            <p className="text-xs text-gray-500">
              {multiple ? `Up to ${maxFiles} files` : 'Single file'} • 
              Max {maxSize}MB each • 
              {accept === ".pdf" ? "PDF format only" : "Supported formats"}
            </p>
          </div>
          
          <Button
            onClick={openFileDialog}
            className="bg-red-600 hover:bg-red-700 text-white"
            type="button"
          >
            Choose Files
          </Button>
        </div>
      </div>

      {uploadError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="text-red-500">⚠️</div>
            <div className="text-sm text-red-700">{uploadError}</div>
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  )
}