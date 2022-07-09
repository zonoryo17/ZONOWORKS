import Link from 'next/link';
import layoutStyles from '../../components/layout.module.css';
import { BsTwitter } from "react-icons/bs";

const contactForm = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <h1 className={layoutStyles.h1Text}>CONTACT</h1>
        <p>制作物に関するご質問や各種ご相談、オファー等<br />
          お気軽にお問い合わせください。</p>
      </div>
      <div className="w-full lg:w-2/5 lg:max-w-full mx-auto shadow-lg mt-14">
        <div className="p-6 border border-gray-300 sm:rounded-md">
          <form method="POST">
            <label className="block mb-6">
              <span className="bg-rose-700 text-white rounded-md px-2 py-1">必須</span>
              <span className="text-gray-700">お名前</span>
              <input
                type="text"
                name="name"
                className="
            block
            w-full
            mt-1
            h-10
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="例：田中　太郎"
                required
              />
            </label>
            <label className="block mb-6">
              <span className="bg-rose-700 text-white rounded-md px-2 py-1">必須</span>
              <span className="text-gray-700">メールアドレス</span>
              <input
                name="email"
                type="email"
                className="
            block
            w-full
            mt-1
            h-10
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="例：zonoworks@example.com"
                required
              />
            </label>
            <label className="block mb-6">
              <span className="bg-gray-400 text-white rounded-md px-2 py-1">任意</span>
              <span className="text-gray-700">電話番号</span>
              <input
                name="phoneNumber"
                type="phoneNumber"
                className="
            block
            w-full
            mt-1
            h-10
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="例：01-2345-6789"
              />
            </label>
            <label className="block mb-6">
              <span className="bg-rose-700 text-white rounded-md px-2 py-1">必須</span>
              <span className="text-gray-700">お問い合わせ内容</span>
              <textarea
                name="message"
                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                placeholder="お問い合わせ内容をご入力ください"
                required
              ></textarea>
            </label>
            <div className="mb-6">
              <button
                type="submit"
                disabled
                className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-600
          "
              >
                送信
              </button>
            </div>
          </form>
          {/* フォーム完成までの仮連絡先 */}
          <div>
            <p>ただいまフォーム機能作成中のため大変お手数ですがお問い合わせはTwitterよりお願いいたします。
            </p>
            <div className="flex justify-center mt-3 mb-5">
              <Link href="https://twitter.com/zonoryo03">
                <a className="mr-4">
                  <BsTwitter size="3em" color="#0080ff" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contactForm;