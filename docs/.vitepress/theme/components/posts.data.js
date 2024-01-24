// posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        frontmatter,
        url,
        excerpt,
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw) {
  const date = new Date(raw)

  return {
    time: +date,
    string: date.toLocaleDateString('zh-CH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}