import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Profile() {
  return (
    <Layout Profile>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>はじめまして。中薗良太と申します。普段は理学療法士としてリハビリ病院で勤務しており，現在はエンジニアとしての転職を目指してプログラミングを学習中です。よろしくお願いします。</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}