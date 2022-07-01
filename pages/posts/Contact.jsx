import React from 'react'
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';


const Contact = () => {
  return (
    <Layout>
    <div>Contact</div>
    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
    </Layout>
  )
}

export default Contact