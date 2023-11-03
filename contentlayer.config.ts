import { defineDocumentType, makeSource} from 'contentlayer/source-files'
import highlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import readingTime from "reading-time";

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Author,
      type: "list",
      of: { type: "string" },
      required: true,
    },
    image: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields: {
    url: { type: 'string', resolve: (article: any) => `/posts/${article._raw.sourceFileName.replace('.mdx', '')}` },
    slug: { type: 'string', resolve: (article: any) => article._raw.sourceFileName.replace('.mdx', '') },
    readingTime: { 
      type: 'number', 
      resolve: (article: any) => Math.ceil(readingTime(article.body.raw.replace(/!\[.*?\]\(.*?\)/g, '')
                                                .replace(/<\/?[^>]+(>|$)/g, '')
                                                .replace(/#+\s/g, ''),
                                              {
                                                wordsPerMinute: 500,
                                              }
                                              ).minutes)
                },
  },
}))

export const Bibliography = defineDocumentType(() => ({
  name: 'Bibliography',
  filePathPattern: `bibliography/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields: {
    slug : { type: 'string', resolve: (bib: any) => bib._raw.sourceFileName.replace('.mdx', '') },
  },
}))

export default makeSource({ 
    contentDirPath: './posts', 
    documentTypes: [Article, Bibliography],
    mdx: {
        remarkPlugins: [remarkGfm],
        // rehypePlugins: [highlight],
    },
})