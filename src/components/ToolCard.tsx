import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ToolCardProps {
  name: string
  description: string
  href: string
  category: string
  icon: string
  popular?: boolean
}

export default function ToolCard({ 
  name, 
  description, 
  href, 
  category, 
  icon, 
  popular = false 
}: ToolCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'merge':
      case 'split':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'convert':
        return 'bg-green-50 text-green-700 border-green-200'
      case 'edit':
        return 'bg-purple-50 text-purple-700 border-purple-200'
      case 'organize':
        return 'bg-orange-50 text-orange-700 border-orange-200'
      case 'security':
        return 'bg-red-50 text-red-700 border-red-200'
      case 'optimize':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200'
      case 'read':
        return 'bg-gray-50 text-gray-700 border-gray-200'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  return (
    <Link href={href} className="group block">
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border border-gray-200 group-hover:border-red-300">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-3xl mb-2">{icon}</div>
            <div className="flex flex-col items-end gap-2">
              {popular && (
                <Badge className="bg-red-100 text-red-700 border-red-200 text-xs font-medium">
                  Popular
                </Badge>
              )}
              <Badge 
                variant="outline" 
                className={`text-xs font-medium ${getCategoryColor(category)}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Badge>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {name}
          </h3>
          
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
          
          {/* Hover effect arrow */}
          <div className="mt-4 flex items-center text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm font-medium">Use tool</span>
            <div className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}