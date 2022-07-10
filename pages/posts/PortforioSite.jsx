import Layout from "../../components/layout";
import { FaRegCalendarAlt, FaRegCommentDots } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

const PortforioSite = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mx-5 mt-20 mb-10 md:mb-20">
        <div>
          <img src="/images/zonoworksImg.jpg" alt="works01の画像" className="max-h-60 mb-5 shadow-lg transition-all" />
        </div>
        <p className="font-bold mb-10">ポートフォリオサイト</p>
        <div className="max-w-md mx-5">
          <div className="mb-5 ">
            <div className="flex items-center">
              <BsCodeSlash size="1.5em" />
              <h3 className="ml-3">使用スタック</h3>
            </div>
            <p>Next.js, TailwindCSS, Sass, React icons</p>
          </div>
          <div className="mb-5">
            <div className="flex items-center">
              <FaRegCalendarAlt size="1.5em" />
              <h3 className="ml-3">制作期間</h3>
            </div>
            <p>約1か月</p>
          </div>
          <div className="mb-5">
            <div className="flex items-center">
              <FaRegCommentDots size="1.5em" />
              <h3 className="ml-3">コメント</h3>
            </div>
            <p>はじめての制作物。Next.jsを使用してパフォーマンスも意識しつつ、スマホファーストなレスポンシブ対応をこころがけました。グラデーション文字や背景、ボタンなど細かい部分にこだわりました。</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PortforioSite;