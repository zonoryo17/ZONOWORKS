import Head from 'next/head';
import Images from '../components/atoms/Images'
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Footer from '../components/Footer'
import "remixicon/fonts/remixicon.css";

export const siteTitle = 'ZonoWorks';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerDev}>
          <Link href="/" className="font-sans text-xl md:text-base">
            <a>
              <Images
                img="/images/zonoworks2.jpg"
                height={50}
                width={230}
              />
            </a>
          </Link>
          <div className="title" style={{ margin: "auto 30px auto auto" }}>
            <Link href="./posts/Profile"><a style={{ marginRight: "30px" }}> Profile </a></Link>
            <Link href="./posts/Works"><a style={{ marginRight: "30px" }}> Works </a></Link>
            <Link href="./posts/Contact"><a> Contact </a></Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}