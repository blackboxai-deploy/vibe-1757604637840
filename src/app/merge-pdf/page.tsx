'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FileUpload from '@/components/FileUpload'
import ProcessingInterface from '@/components/ProcessingInterface'
import Link from 'next/link'

export default function MergePDFPage() {
  const [files, setFiles] = useState<File[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleFilesSelected = (selectedFiles: File[]) => {
    setFiles(selectedFiles)
    setIsComplete(false)
  }

  const handleMergePDF = () => {
    if (files.length < 2) {
      alert('Please select at least 2 PDF files to merge.')
      return
    }

    setIsProcessing(true)
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 3000)
  }

  const relatedTools = [
    { name: 'Split PDF', href: '/split-pdf', description: 'Extract pages from PDF' },
    { name: 'Compress PDF', href: '/compress-pdf', description: 'Reduce PDF file size' },
    { name: 'PDF to Word', href: '/pdf-to-word', description: 'Convert PDF to Word' },
    { name: 'Rotate PDF', href: '/rotate-pdf', description: 'Rotate PDF pages' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-red-600 hover:text-red-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Merge PDF</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">📄</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Merge PDF files
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combine PDFs in the order you want with the easiest PDF merger available. 
            Select multiple PDF files and merge them in seconds.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Select PDF files to merge</CardTitle>
            </CardHeader>
            <CardContent>
              {!isProcessing && !isComplete && (
                <div className="space-y-6">
                  <FileUpload
                    onFilesSelected={handleFilesSelected}
                    accept=".pdf"
                    multiple={true}
                    maxFiles={10}
                  />
                  
                  {files.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="font-medium text-gray-900">Selected files ({files.length}):</h3>
                      <div className="space-y-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="text-red-600">📄</div>
                              <div>
                                <div className="font-medium text-gray-900">{file.name}</div>
                                <div className="text-sm text-gray-500">
                                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setFiles(files.filter((_, i) => i !== index))}
                              className="text-gray-500 hover:text-red-600"
                            >
                              Remove
                            </Button>
                          </div>
                        ))}
                      </div>
                      
                      <Button
                        onClick={handleMergePDF}
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                        disabled={files.length < 2}
                      >
                        {files.length < 2 
                          ? 'Select at least 2 PDF files' 
                          : `Merge ${files.length} PDF files`
                        }
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {isProcessing && (
                <ProcessingInterface
                  title="Merging your PDF files..."
                  description="Please wait while we combine your PDF files into a single document."
                />
              )}

              {isComplete && (
                <div className="text-center space-y-4">
                  <div className="text-green-600 text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    PDF files merged successfully!
                  </h3>
                  <p className="text-gray-600">
                    Your merged PDF is ready for download.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Download Merged PDF
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setFiles([])
                        setIsComplete(false)
                      }}
                    >
                      Merge More Files
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-sm text-gray-600">Files are deleted automatically after processing</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast</h3>
              <p className="text-sm text-gray-600">Merge multiple PDFs in seconds</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Any Device</h3>
              <p className="text-sm text-gray-600">Works on mobile, tablet, and desktop</p>
            </div>
          </div>

          {/* Related Tools */}
          <Card>
            <CardHeader>
              <CardTitle>Related PDF Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedTools.map((tool) => (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className="p-4 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-sm transition-all"
                  >
                    <h3 className="font-medium text-gray-900 mb-1">{tool.name}</h3>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}