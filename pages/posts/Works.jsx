import React from 'react'
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';


const Works = () => {
  return (
    <Layout>
    <h1>Works</h1>
    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
  </Layout>
  )
}

export default Works