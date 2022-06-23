import React from 'react'
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import styles from '../components/layout.module.css';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';


const About = () => {
  return (
    <>
      <Layout>
        <div className={styles.topImage}>
        <Image
          priority
          src="/images/keshiki.jpg"
          height={500}
          width={2000}
        />
        </div>
        <div className={utilStyles.heading2Xl}>
          <h1>理学療法士からエンジニアへ</h1>
          <h1>日本、世界へ発信する</h1>
        </div>

        <div style={{ textAlign: 'center', margin: "30px 0 30px 0" }}>
          <p className="text-4xl font-mono">Skills</p>
          <Image
            src="/images/html-5.svg"
            height={150}
            width={150}
          />
          <Image
            src="/images/css-3.svg"
            height={150}
            width={150}
          />
          <Image
            src="/images/JS.jpg"
            height={150}
            width={150}
          />
          <div style={{ marginRight: "15px", display: "inline" }}>
            <Image
              src="/images/react.svg"
              height={130}
              width={130}
            />
          </div>
          <div style={{ marginRight: "15px", display: "inline" }}>
            <Image
              src="/images/nextjs.svg"
              height={130}
              width={130}
            />
          </div>
          <div style={{ marginRight: "15px", display: "inline" }}>
            <Image
              src="/images/git.svg"
              height={120}
              width={120}
            />
          </div>
          <Image
            src="/images/github-icon.svg"
            height={140}
            width={140}
          />
        </div>


        <div style={{ textAlign: 'center' }}>
          <p className="text-4xl font-mono" style={{ margin: "20px 0 0 0" }}>Studying</p>
          <div style={{ marginRight: "25px", display: "inline" }}>
            <Image
              src="/images/typescript-icon.svg"
              height={120}
              width={120}
            />
          </div>
          <div style={{ marginRight: "25px", display: "inline" }}>
            <Image
              src="/images/php.svg"
              height={140}
              width={140}
            />
          </div>
          <div style={{ marginRight: "20px", display: "inline" }}>
            <Image
              src="/images/laravel.svg"
              height={120}
              width={120}
            />
          </div>
          <div style={{ marginRight: "25px", display: "inline" }}>
            <Image
              src="/images/mysql.svg"
              height={140}
              width={140}
            />
          </div>
          <div style={{ marginRight: "25px", display: "inline" }}>
            <Image
              src="/images/nodejs.svg"
              height={140}
              width={140}
            />
          </div>
          <div style={{ marginRight: "15px", display: "inline" }}>
            <Image
              src="/images/docker-icon.svg"
              height={130}
              width={130}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About