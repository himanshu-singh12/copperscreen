// Simple markdown renderer for Edge Runtime compatibility
// Replaces ReactMarkdown which requires React hooks not available in Edge Runtime

export function renderMarkdownToHTML(markdown: string): string {
  if (!markdown) return ''
  
  let html = markdown
    // Convert line breaks to paragraphs
    .split('\n\n')
    .map(paragraph => paragraph.trim())
    .filter(paragraph => paragraph.length > 0)
    .map(paragraph => {
      // Skip if already a heading or list item
      if (paragraph.startsWith('#') || paragraph.startsWith('*') || paragraph.startsWith('-') || paragraph.startsWith('>')) {
        return paragraph
      }
      return `<p>${paragraph}</p>`
    })
    .join('\n\n')

  // Convert headings
  html = html
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-charcoal mb-3 mt-6">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-charcoal mb-4 mt-8">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-charcoal mb-6 mt-8">$1</h1>')

  // Convert bold and italic
  html = html
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-charcoal">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')

  // Convert links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g, 
    '<a href="$2" class="text-copper-600 hover:text-copper-700 underline" target="_blank" rel="noopener noreferrer">$1</a>'
  )

  // Convert inline code
  html = html.replace(
    /`([^`]+)`/g, 
    '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">$1</code>'
  )

  // Convert blockquotes
  html = html.replace(
    /^> (.*$)/gm, 
    '<blockquote class="border-l-4 border-copper-500 pl-4 italic text-gray-600 my-6">$1</blockquote>'
  )

  // Convert unordered lists
  const listItems = html.match(/^\* (.*)$/gm)
  if (listItems) {
    const listHTML = listItems
      .map(item => item.replace(/^\* (.*)$/, '<li class="mb-1">$1</li>'))
      .join('\n')
    html = html.replace(
      /^\* .*$/gm, 
      ''
    ).replace(/\n+/g, '\n')
    html += `\n<ul class="list-disc list-inside mb-4 space-y-2 text-gray-700">\n${listHTML}\n</ul>`
  }

  // Convert ordered lists
  const orderedListItems = html.match(/^\d+\. (.*)$/gm)
  if (orderedListItems) {
    const orderedListHTML = orderedListItems
      .map(item => item.replace(/^\d+\. (.*)$/, '<li class="mb-1">$1</li>'))
      .join('\n')
    html = html.replace(
      /^\d+\. .*$/gm, 
      ''
    ).replace(/\n+/g, '\n')
    html += `\n<ol class="list-decimal list-inside mb-4 space-y-2 text-gray-700">\n${orderedListHTML}\n</ol>`
  }

  // Clean up extra newlines and add paragraph classes
  html = html
    .replace(/\n+/g, '\n')
    .replace(/<p>/g, '<p class="text-gray-700 mb-4 leading-relaxed">')
    .trim()

  return html
}

// Sanitize HTML to prevent XSS (basic sanitization)
export function sanitizeHTML(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
}