import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import layoutStyles from '../../components/layout.module.css';
import Link from 'next/link';

const name = '中薗　良太';

export default function Profile() {
  return (
    <Layout>
      <div>
        <h1 className={layoutStyles.h1Text}>About Me</h1>
      </div>
      <div className="flex justify-center">
        <section>
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
          <div className={utilStyles.headingMd}>
            <p>まずは行動。直感を大切に。</p>
            <div className={layoutStyles.profileIcons}>
              <Link href="https://twitter.com/zonoryo03">
                <a className="mr-4">
                  <i className="ri-twitter-fill"></i>
                </a>
              </Link>
              <Link href="https://github.com/zonoryo17">
                <a>
                  <i className="ri-github-fill"></i>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <table className="table-auto ml-8">
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
              <td>学習中スキル・言語　　　</td>
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
      <div>
        <h1 className={layoutStyles.h1Text}>CAREER and JOB</h1>
        <ul className={layoutStyles.listBox}>
          <li>
            <div className={layoutStyles.listBoxYear}>現在</div>
            <div className={layoutStyles.listBoxContents}>
              <p>大阪のリハビリ専門病院　理学療法士　主任</p>
            </div>
          </li>
          <li>
            <div className={layoutStyles.listBoxYear}>2020年4月－2022年3月</div>
            <div className={layoutStyles.listBoxContents}>
              <p>大学院修士課程　修了（医療リハビリテーション学）</p>
            </div>
          </li>
          <li>
            <div className={layoutStyles.listBoxYear}>2019年4月－2020年3月</div>
            <div className={layoutStyles.listBoxContents}>
              <p>大学　研究員</p>
            </div>
          </li>
          <li>
            <div className={layoutStyles.listBoxYear}>2018年11月－2020年6月</div>
            <div className={layoutStyles.listBoxContents}>
              <p>ヘルスケア系スタートアップ企業　腰痛・肩こりのチャットサポート　業務委託</p>
            </div>
          </li>
          <li>
            <div className={layoutStyles.listBoxYear}>2018年8月</div>
            <div className={layoutStyles.listBoxContents}>
              <p>独立行政法人大学評価学位授与機構　学位（保健衛生学）</p>
            </div>
          </li>
          <li>
            <div className={layoutStyles.listBoxYear}>2016年4月－2018年3月</div>
            <div className={layoutStyles.listBoxContents}>
              <p>通信制大学</p>
            </div>
          </li>
          <li>
            <div className={layoutStyles.listBoxYear}>2013年4月－現在</div>
            <div className={layoutStyles.listBoxContents}>
              <p>訪問リハビリテーション　非常勤</p>
            </div>
          </li>
          <li>
            <div className={layoutStyles.listBoxYear}>2011年4月－現在</div>
            <div className={layoutStyles.listBoxContents}>
              <p>大阪のリハビリ専門病院　入職</p>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
}