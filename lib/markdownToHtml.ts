import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import highlight from 'remark-highlight.js'

export const markdownToHtml = async (markdown: string) => {
  const result = await remark()
    .use(highlight)
    .use(remarkGfm)
    .use(html, { allowDangerousHtml: true })
    .process(markdown)
  return result.toString()
}
