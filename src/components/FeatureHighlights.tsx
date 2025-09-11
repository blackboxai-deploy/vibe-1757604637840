import { Card, CardContent } from '@/components/ui/card'

export default function FeatureHighlights() {
  const features = [
    {
      title: '100% Free',
      description: 'All PDF tools are completely free to use. No hidden costs, no subscriptions required.',
      icon: '💯',
      color: 'bg-green-50 text-green-700'
    },
    {
      title: 'Secure & Private',
      description: 'Your files are processed securely. We delete all files automatically after 1 hour.',
      icon: '🔒',
      color: 'bg-blue-50 text-blue-700'
    },
    {
      title: 'No Installation',
      description: 'Works entirely in your web browser. No software to download or install.',
      icon: '🌐',
      color: 'bg-purple-50 text-purple-700'
    },
    {
      title: 'Fast Processing',
      description: 'Lightning-fast PDF processing powered by advanced algorithms and cloud technology.',
      icon: '⚡',
      color: 'bg-yellow-50 text-yellow-700'
    },
    {
      title: 'All Devices',
      description: 'Works on any device - Windows, Mac, iOS, Android, and Linux. Mobile optimized.',
      icon: '📱',
      color: 'bg-indigo-50 text-indigo-700'
    },
    {
      title: 'High Quality',
      description: 'Maintain the highest quality in your PDF files with our advanced processing engine.',
      icon: '⭐',
      color: 'bg-red-50 text-red-700'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
              <span className="text-2xl">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}