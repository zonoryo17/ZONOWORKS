import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import layoutStyles from '../../components/layout.module.css';
import Link from 'next/link';
import "remixicon/fonts/remixicon.css";

const name = '中薗　良太';

export default function Profile() {
  return (
    <Layout Profile>
      <div>
        <h1 className={layoutStyles.h1Text}>About Me</h1>
      </div>
      <div className={utilStyles.profile}>
        <div>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <div className={utilStyles.iconImage}>
            <Image
              priority
              src="/images/profile2.jpg"
              className={utilStyles.borderCircle}
              height={200}
              width={200}
              alt={name}
            />
          </div>
          <section className={utilStyles.headingMd}>
            <p>まずは行動。直感を大切に。</p>
            <div className={layoutStyles.profileIcons}>
              <Link href="https://twitter.com/zonoryo03">
                <a style={{ marginRight: "10px" }}>
                  <i className="ri-twitter-fill"></i>
                </a>
              </Link>
              <Link href="https://github.com/zonoryo17">
                <a>
                  <i className="ri-github-fill"></i>
                </a>
              </Link>
            </div>
          </section>
        </div>
        <div>
          <table className={utilStyles.tableText}>
            <tbody>
              <tr className="border-b-2">
                <td>名前</td>
                <td>ぞのりょー</td>
              </tr>
              <tr className="border-b-2">
                <td>住所</td>
                <td>大阪府大阪市</td>
              </tr>
              <tr className="border-b-2">
                <td>仕事</td>
                <td>理学療法士（主任）
                </td>
              </tr>
              <tr className="border-b-2">
                <td>資格</td>
                <td>理学療法士、3学会合同呼吸療法認定士、ユニバーサルマナー検定2級、<br />地域ケア会議推進リーダー、介護予防推進リーダー

                </td>
              </tr>
              <tr className="border-b-2">
                <td>習得スキル・言語</td>
                <td>HTML, CSS, JavaScript, React, Next.js, Git/GitHub</td>
              </tr>
              <tr className="border-b-2">
                <td>学習中スキル・言語　　</td>
                <td>TypeScript, PHP/Larabel, MySQL, Node.js, Docker</td>
              </tr>
              <tr className="border-b-2">
                <td>学習期間</td>
                <td>2022.2.20~ 現在</td>
              </tr>
              <tr className="border-b-2">
                <td>趣味</td>
                <td>音楽鑑賞（ライブ、フェス）、バスケ、マラソン、ロードバイク、<br />
                  アウトドア、マンガ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h1 className={layoutStyles.h1Text}>CAREER and JOB</h1>
        <ul className={layoutStyles.listBox}>
          <li>
            <p></p>
          </li>
          <li>
            <p></p>
          </li>
          <li>
            <p></p>
          </li>
          <li>
            <p></p>
          </li>
          <li>
            <p></p>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
      </div>
    </Layout>
  );
}