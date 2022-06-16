import React from 'react'
import PrimaryButton from '../components/atoms/PrimaryButton'
import Link from 'next/link'
import Images from '../components/atoms/Images'
import 'tailwindcss/tailwind.css';


const About = () => {
  return (
    <>
    <Link href="/" className="font-sans text-xl md:text-base">
      <a>
        <Images />
      </a>
    </Link>
    <h1 className="title">
      <Link href="./posts/Profile"><a> Profile </a></Link>
      <Link href="./posts/Works"><a> Works </a></Link>
      <Link href="./posts/Contact"><a> Contact </a></Link>
    </h1>

    </>
  )
}

export default About