import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Entry, retrieveEntries } from '../models/Entry'

export default function PlaygroundPage({
  entries,
}: {
  entries: Entry[]
}): React.ReactElement {
  return (
    <Layout>
        <h1 className="pt-8 pb-4 text-2xl">About</h1>
        <div>
            Software enginner
        </div>
    </Layout>
  )
}