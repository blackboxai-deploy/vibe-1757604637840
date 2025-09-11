import ToolCard from './ToolCard'

export default function ToolsGrid() {
  const pdfTools = [
    // Merge & Split
    {
      name: 'Merge PDF',
      description: 'Combine PDFs in the order you want with the easiest PDF merger available.',
      href: '/merge-pdf',
      category: 'merge',
      icon: '📄',
      popular: true
    },
    {
      name: 'Split PDF',
      description: 'Separate one page or a whole set for easy PDF splitting.',
      href: '/split-pdf',
      category: 'split',
      icon: '✂️'
    },
    {
      name: 'Compress PDF',
      description: 'Reduce file size while optimizing for maximal PDF quality.',
      href: '/compress-pdf',
      category: 'optimize',
      icon: '🗜️',
      popular: true
    },
    
    // Convert To PDF
    {
      name: 'Word to PDF',
      description: 'Make DOC and DOCX files easy to read by converting them to PDF.',
      href: '/word-to-pdf',
      category: 'convert',
      icon: '📝'
    },
    {
      name: 'Excel to PDF',
      description: 'Make XLSX and XLS files easy to read by converting them to PDF.',
      href: '/excel-to-pdf',
      category: 'convert',
      icon: '📊'
    },
    {
      name: 'PowerPoint to PDF',
      description: 'Make PPT and PPTX slideshows easy to view by converting them to PDF.',
      href: '/powerpoint-to-pdf',
      category: 'convert',
      icon: '📽️'
    },
    {
      name: 'JPG to PDF',
      description: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins.',
      href: '/jpg-to-pdf',
      category: 'convert',
      icon: '🖼️'
    },
    {
      name: 'PNG to PDF',
      description: 'Convert PNG images to PDF in seconds. Easily adjust orientation and margins.',
      href: '/png-to-pdf',
      category: 'convert',
      icon: '🎨'
    },

    // Convert From PDF
    {
      name: 'PDF to Word',
      description: 'Easily convert your PDF files into easy to edit DOC and DOCX documents.',
      href: '/pdf-to-word',
      category: 'convert',
      icon: '📄',
      popular: true
    },
    {
      name: 'PDF to Excel',
      description: 'Pull data straight from PDFs into Excel spreadsheets in a few short seconds.',
      href: '/pdf-to-excel',
      category: 'convert',
      icon: '📈'
    },
    {
      name: 'PDF to PowerPoint',
      description: 'Turn your PDFs into easy to edit PowerPoint PPT and PPTX slideshows.',
      href: '/pdf-to-powerpoint',
      category: 'convert',
      icon: '📺'
    },
    {
      name: 'PDF to JPG',
      description: 'Convert each PDF page into a JPG or extract all images contained in a PDF.',
      href: '/pdf-to-jpg',
      category: 'convert',
      icon: '📷'
    },

    // Edit & Sign
    {
      name: 'Edit PDF',
      description: 'Add text, images, shapes or freehand annotations to a PDF document.',
      href: '/edit-pdf',
      category: 'edit',
      icon: '✏️'
    },
    {
      name: 'Sign PDF',
      description: 'Sign your own PDFs with digital signatures or request signatures from others.',
      href: '/sign-pdf',
      category: 'edit',
      icon: '✍️',
      popular: true
    },
    {
      name: 'Fill & Sign',
      description: 'Fill out PDF forms quickly without printing. Add signatures or initials.',
      href: '/fill-sign-pdf',
      category: 'edit',
      icon: '📝'
    },

    // Organize
    {
      name: 'Rotate PDF',
      description: 'Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!',
      href: '/rotate-pdf',
      category: 'organize',
      icon: '🔄'
    },
    {
      name: 'Delete PDF pages',
      description: 'Delete specific pages from your PDF. Upload your file and select pages to delete.',
      href: '/delete-pages',
      category: 'organize',
      icon: '🗑️'
    },
    {
      name: 'Add page numbers',
      description: 'Add page numbers to PDFs with full control over position, typography and format.',
      href: '/add-page-numbers',
      category: 'organize',
      icon: '🔢'
    },

    // Security
    {
      name: 'Protect PDF',
      description: 'Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access.',
      href: '/protect-pdf',
      category: 'security',
      icon: '🔒'
    },
    {
      name: 'Unlock PDF',
      description: 'Remove passwords from PDF files. Use this tool if you know the password.',
      href: '/unlock-pdf',
      category: 'security',
      icon: '🔓'
    },

    // Read
    {
      name: 'PDF Reader',
      description: 'Read PDF files online. View PDF documents right in your browser.',
      href: '/pdf-reader',
      category: 'read',
      icon: '👁️'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {pdfTools.map((tool) => (
        <ToolCard
          key={tool.name}
          name={tool.name}
          description={tool.description}
          href={tool.href}
          category={tool.category}
          icon={tool.icon}
          popular={tool.popular}
        />
      ))}
    </div>
  )
}