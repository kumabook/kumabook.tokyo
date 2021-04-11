import { GetStaticProps, GetStaticPaths } from 'next'
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown'
import gfm from 'remark-gfm'
import Layout from '../../components/Layout'
import { Entry, retrieveEntries } from '../../models/Entry'

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = retrieveEntries()
  const paths = entries.map((entry) => ({
    params: {
      slug: entry.slug,
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug
  const entries = retrieveEntries()
  const entry = entries.find((e) => e.slug === slug)
  return {
    props: { entry },
    revalidate: 1,
  }
}

export default function EntryPage({ entry }: { entry: Entry }) {
  return (
    <Layout>
        <article className="markdown-body col-span-5 m-10">
            <ReactMarkdown plugins={[gfm]}>{entry.content}</ReactMarkdown>
        </article>
    </Layout>
  )
}
