'use client'

import { Button } from '@/components/ui/button'
import ToolsGrid from '@/components/ToolsGrid'
import FeatureHighlights from '@/components/FeatureHighlights'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Every tool you need to work with PDFs in one place
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! 
            Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Choose PDF Tool
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7ec48c6b-1d34-43d0-b587-4cce99052c94.png" 
              alt="PDF tools interface showing various document processing options with modern design elements" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All the PDF tools you'll ever need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive suite of PDF tools makes it easy to create, edit, convert, and manage your documents online.
            </p>
          </div>
          <ToolsGrid />
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why choose our PDF tools?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the best PDF processing tools with advanced features designed for professionals and everyday users.
            </p>
          </div>
          <FeatureHighlights />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join millions of users who trust our PDF tools for their document processing needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold"
            >
              Get Started for Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg"
            >
              View All Tools
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">50M+</div>
              <div className="text-gray-300">Files Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">25+</div>
              <div className="text-gray-300">PDF Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">200+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}