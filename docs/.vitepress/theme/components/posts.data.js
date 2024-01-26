// posts.data.js
import { createContentLoader } from 'vitepress'
import { getReadingTime } from '../utils/readTime'

export default createContentLoader("blog/*.md", {
  excerpt: true,
  includeSrc: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt, src }) => ({
        src,
        frontmatter,
        url,
        excerpt,
        date: formatDate(frontmatter.date),
        readingInfo: getReadingTime(src)
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
