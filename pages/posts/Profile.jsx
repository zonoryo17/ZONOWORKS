import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import layoutStyles from '../../components/layout.module.css';
import Link from 'next/link';
import { FaTwitter, FaGithub } from "react-icons/fa"

const name = '中薗　良太';

export default function Profile() {
  return (
    <>
      <Head>
        <title>ZonoWorks/Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={utilStyles.tiltBgLD}>
          <div>
            <h1 className={layoutStyles.h1Text}>About Me</h1>
          </div>
          <section className="flex justify-center flex-wrap text-sm md:text-base">
            <div className="mb-6 lg:mr-10">
              <div>
                <Image
                  priority
                  src="/images/profile2.jpg"
                  className="rounded-md"
                  height={200}
                  width={200}
                  alt={name}
                />
              </div>
              <div className="flex flex-col items-center text-base leading-6">
                <p>まずは行動。直感を大切に。</p>
                <div className="flex mx-4 mt-3">
                  <Link href="https://twitter.com/zonoryo03">
                    <a className="mr-4">
                      <FaTwitter />
                    </a>
                  </Link>
                  <Link href="https://github.com/zonoryo17">
                    <a>
                      <FaGithub />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <table className="table-auto mx-8 w-full md:w-2/4">
              <tbody>
                <tr className="border-b-2">
                  <td className="w-40 sm:w-44 lg:w-56">名前</td>
                  <td>ぞのりょー</td>
                </tr>
                <tr className="border-b-2">
                  <td>住所</td>
                  <td>大阪府</td>
                </tr>
                <tr className="border-b-2">
                  <td>仕事</td>
                  <td>理学療法士（主任）
                  </td>
                </tr>
                <tr className="border-b-2">
                  <td>資格</td>
                  <td>理学療法士、3学会合同呼吸療法認定士、ユニバーサルマナー検定2級、地域ケア会議推進リーダー、介護予防推進リーダー
                  </td>
                </tr>
                <tr className="border-b-2">
                  <td>習得スキル・言語</td>
                  <td>HTML, CSS, JavaScript, React, Next.js, Git/GitHub, TailwindCSS, MUI</td>
                </tr>
                <tr className="border-b-2">
                  <td>学習中スキル・言語</td>
                  <td>TypeScript, PHP/Larabel, MySQL, Node.js, Docker</td>
                </tr>
                <tr className="border-b-2">
                  <td>その他の使用ツール</td>
                  <td>Slack, Torello, Notion</td>
                </tr>
                <tr className="border-b-2">
                  <td>学習期間</td>
                  <td>2022.2.20~ 現在</td>
                </tr>
                <tr className="border-b-2">
                  <td>趣味</td>
                  <td>音楽鑑賞（ライブ、フェス）、バスケ、マラソン、ロードバイク、アウトドア、マンガ</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <div className="mx-auto lg:text-center mt-24 py-20 bg-slate-100">
          <div className="mx-10 sm:mx-20">
            <p className="text-sm md:text-base">当サイトにアクセスしていただきありがとうございます。ぞのりょーと申します。<br />
              普段は理学療法士として勤務しており、現在はエンジニアとしての転職を目指してプログラミングを学習中です。
            </p>
            <div className="flex flex-col items-center">
              <h3 className="bg-slate-800 text-gray-100 text-xl px-14 py-4 mt-8 mb-4 rounded-2xl text-shadow">Why Engineer ?</h3>
              <div>
                <ol className="list-decimal font-bold text-left ml-5 md:ml-24 text-sm sm:text-base" >
                  <li>より多くの人に影響を与えたかったから</li>
                  <li>臨床や大学院で得た知識や経験から作ってみたいサービスができたから</li>
                  <li>プログラミング学習が楽しいから</li>
                </ol>
              </div>
              <p className="text-sm sm:text-base mt-10">プログラミング学習は難しく、悩むこともありますが楽しみながら学習を続けられています！<br />
                社会での様々な課題を解決し、多くの方により良いサービスが提供できるようなエンジニアを目指します。</p>
            </div>
          </div>
        </div>
        <div className={utilStyles.tiltBgLD}>
          <h1 className={layoutStyles.h1Text}>CAREER and JOB</h1>
          <ul className={layoutStyles.listBox}>
            <li>
              <div className="text-zinc-400 font-bold">現在</div>
              <div className="font-bold">
                <p>リハビリ専門病院　理学療法士　主任</p>
              </div>
            </li>
            <li>
              <div className="text-zinc-400 font-bold">2020年4月－2022年3月</div>
              <div className="font-bold">
                <p>大学院修士課程　修了（医療リハビリテーション学）</p>
              </div>
            </li>
            <li>
              <div className="text-zinc-400 font-bold">2019年4月－2020年3月</div>
              <div className="font-bold">
                <p>大学　研究員</p>
              </div>
            </li>
            <li>
              <div className="text-zinc-400 font-bold">2018年11月－2020年6月</div>
              <div className="font-bold">
                <p>ヘルスケア系スタートアップ企業　腰痛・肩こりのチャットサポート　業務委託</p>
              </div>
            </li>
            <li>
              <div className="text-zinc-400 font-bold">2018年8月</div>
              <div className="font-bold">
                <p>独立行政法人大学評価学位授与機構　学位（保健衛生学）</p>
              </div>
            </li>
            <li>
              <div className="text-zinc-400 font-bold">2016年4月－2018年3月</div>
              <div className="font-bold">
                <p>通信制大学</p>
              </div>
            </li>
            <li>
              <div className="text-zinc-400 font-bold">2013年4月－現在</div>
              <div className="font-bold">
                <p>訪問リハビリテーション　非常勤</p>
              </div>
            </li>
            <li>
              <div className="text-zinc-400 font-bold">2011年4月－現在</div>
              <div className="font-bold">
                <p>リハビリ専門病院　入職</p>
              </div>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}