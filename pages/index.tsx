import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Entry, retrieveEntries } from '../models/Entry'

export default function BlogIndex({
  entries,
}: {
  entries: Entry[]
}): React.ReactElement {
  return (
    <Layout>
        <h1 className="pt-8 pb-4 text-2xl">Entries</h1>
        <ul>
        {entries.map((entry) => {
          return (
            <li key={entry.slug}>
              <Link href={`/entries/${entry.slug}`}>{`${entry.date} ー ${entry.title}`}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const entries = retrieveEntries()
  return {
    props: { entries },
  }
}
