'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pdfTools = [
    { name: 'Merge PDF', href: '/merge-pdf', description: 'Combine multiple PDFs into one' },
    { name: 'Split PDF', href: '/split-pdf', description: 'Extract pages from PDF' },
    { name: 'Compress PDF', href: '/compress-pdf', description: 'Reduce PDF file size' },
    { name: 'PDF to Word', href: '/pdf-to-word', description: 'Convert PDF to editable Word' },
    { name: 'Word to PDF', href: '/word-to-pdf', description: 'Convert Word documents to PDF' },
    { name: 'Excel to PDF', href: '/excel-to-pdf', description: 'Convert Excel files to PDF' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">PDF</span>
            </div>
            <span className="text-xl font-bold text-gray-900">PDF Tools</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-red-600">
                    PDF Tools
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-6 w-96">
                      {pdfTools.map((tool) => (
                        <Link
                          key={tool.name}
                          href={tool.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{tool.name}</div>
                          <div className="text-sm text-gray-600">{tool.description}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link href="/pricing" className="text-gray-700 hover:text-red-600 font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium">
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Sign In
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Get Pro
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-900 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-gray-900 block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-gray-900 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">PDF Tools</h3>
                <div className="space-y-2 pl-4">
                  {pdfTools.map((tool) => (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      className="block text-gray-600 hover:text-red-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <Link href="/pricing" className="block text-gray-700 font-medium">
                  Pricing
                </Link>
                <Link href="/about" className="block text-gray-700 font-medium">
                  About
                </Link>
                <div className="flex space-x-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    Sign In
                  </Button>
                  <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                    Get Pro
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}