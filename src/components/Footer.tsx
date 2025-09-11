import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Merge PDF', href: '/merge-pdf' },
    { name: 'Split PDF', href: '/split-pdf' },
    { name: 'Compress PDF', href: '/compress-pdf' },
    { name: 'PDF to Word', href: '/pdf-to-word' },
    { name: 'Word to PDF', href: '/word-to-pdf' },
    { name: 'Excel to PDF', href: '/excel-to-pdf' },
  ]

  const convertTools = [
    { name: 'PDF to PowerPoint', href: '/pdf-to-powerpoint' },
    { name: 'PowerPoint to PDF', href: '/powerpoint-to-pdf' },
    { name: 'PDF to JPG', href: '/pdf-to-jpg' },
    { name: 'JPG to PDF', href: '/jpg-to-pdf' },
    { name: 'PDF to PNG', href: '/pdf-to-png' },
    { name: 'PNG to PDF', href: '/png-to-pdf' },
  ]

  const editTools = [
    { name: 'Add Text to PDF', href: '/add-text-pdf' },
    { name: 'Sign PDF', href: '/sign-pdf' },
    { name: 'Rotate PDF', href: '/rotate-pdf' },
    { name: 'Delete Pages', href: '/delete-pages' },
    { name: 'Add Page Numbers', href: '/add-page-numbers' },
    { name: 'Protect PDF', href: '/protect-pdf' },
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Help Center', href: '/help' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">PDF</span>
              </div>
              <span className="text-xl font-bold">PDF Tools</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional PDF tools for all your document processing needs. 
              Fast, secure, and easy to use online PDF solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-5 h-5 bg-gray-600 rounded"></div>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5 bg-gray-600 rounded"></div>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5 bg-gray-600 rounded"></div>
              </Link>
            </div>
          </div>

          {/* Quick Tools */}
          <div>
            <h3 className="font-semibold text-white mb-4">Popular Tools</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Convert Tools */}
          <div>
            <h3 className="font-semibold text-white mb-4">Convert</h3>
            <ul className="space-y-2">
              {convertTools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Edit Tools */}
          <div>
            <h3 className="font-semibold text-white mb-4">Edit & Organize</h3>
            <ul className="space-y-2">
              {editTools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} PDF Tools. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-gray-400 text-sm">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}