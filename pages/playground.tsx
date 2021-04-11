import React from 'react'
import Layout from '../components/Layout'

export default function PlaygroundPage(): React.ReactElement {
  return (
    <Layout>
        <h1 className="pt-8 pb-4 text-2xl">Playground</h1>
        <div>ブラウザで試すもの作ったらここにおく。</div>
    </Layout>
  )
}