import Layout from '../components/layout'
import { FaRegCalendarAlt, FaRegCommentDots } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'

const PortforioSite = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mx-5 mt-20 mb-10 md:mb-20">
        <div>
          <img
            src="/images/RehaBase.png"
            alt="works01の画像"
            className="max-h-60 mb-5 shadow-lg transition-all"
          />
        </div>
        <p className="font-bold mb-10">
          あなたの声でつくるリハビリ情報共有サイト「RehaBase」
        </p>
        <div className="max-w-md mx-5">
          <div className="mb-5 ">
            <div className="flex items-center">
              <BsCodeSlash size="1.5em" />
              <h3 className="ml-3">使用スタック</h3>
            </div>
            <p>Frontend: React, Next.js, TypeScript, Chakra UI</p>
            <p>Backend: Supabase</p>
          </div>
          <div className="mb-5">
            <div className="flex items-center">
              <FaRegCalendarAlt size="1.5em" />
              <h3 className="ml-3">制作期間</h3>
            </div>
            <p>約2か月半</p>
          </div>
          <div className="mb-5">
            <div className="flex items-center">
              <FaRegCommentDots size="1.5em" />
              <h3 className="ml-3">コメント</h3>
            </div>
            <p>
              ポートフォリオとしてWebアプリケーション（SPA）を制作しました。現職で働く中で患者様が様々な訴えをしてくださる声を元に、こんなサービスを作りたい！と思い開発しました。現在もユーザーからのフィードバックをいただき、修正を続けています。
              <br />
              <br />
              詳細、ソースコードについてはこちら↓
              <br />
              <a href="https://github.com/zonoryo17/RehaBase">
                GitHub: https://github.com/zonoryo17/RehaBase
              </a>
              <br />
              <br />
              アプリケーションサイトはこちら↓
              <br />
              <a href="https://rehabase-app.com/">
                あなたの声でつくるリハビリ情報共有サイト「RehaBase」
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortforioSite
