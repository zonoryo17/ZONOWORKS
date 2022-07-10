import Image from 'next/image';
import Layout from '../components/layout';
import Link from '../node_modules/next/link';
import utilStyles from '../styles/utils.module.css';
import scrollStyle from "../styles/scroll.module.scss";

const About = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-end h-full relative">
          <div className="flex flex-col items-center mx-10 absolute top-0 left-0">
            <p className="whitespace-nowrap text-cyan-100 xl:text-zinc-800  text-sm sm:text-2xl lg:text-4xl text-shadow md:text-shadow-lg">Zonoryo's Portfoliosite</p>
            <p className="whitespace-nowrap text-cyan-100 xl:text-zinc-800  text-xs sm:text-xl lg:text-2xl text-shadow md:text-shadow-lg">Wellcome!!</p>
          </div>
          <div className={scrollStyle.scrolldown2}><span>Scroll</span></div>
          <div className="-z-40">
            <Image
              priority
              src="/images/osakaCastle04.jpg"
              height={600}
              width={1200}
            />
          </div>
        </div>
        <div className="bg-white py-8 px-4 lg:py-16 grid grid-cols-6 justify-items-center">
          <h2 className="bg-clip-text text-center text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold uppercase leading-tight col-start-2 col-span-4 w-max">
            理学療法士からエンジニアへ<br />
            想いをカタチにする
          </h2>
        </div>
        <div className="text-center mb-14 mx-6 md:mx-14 lg:mx-24">
          <p className="text-4xl font-mono pt-4 mt-4 mb-4">Skills</p>
          <div className="flex justify-center">
            <div>
              <Image
                src="/images/html-5.svg"
                height={150}
                width={150}
              />
            </div>
            <div>
              <Image
                src="/images/css-3.svg"
                height={150}
                width={150}
              />
            </div>
            <div>
              <Image
                src="/images/JS.jpg"
                height={150}
                width={150}
              />
            </div>
            <div className="mr-4 mt-3">
              <Image
                src="/images/react.svg"
                height={130}
                width={130}
              />
            </div>
            <div className="mr-4 mt-3">
              <Image
                src="/images/nextjs.svg"
                height={130}
                width={130}
              />
            </div>
            <div className="mr-4 mt-3">
              <Image
                src="/images/git.svg"
                height={120}
                width={120}
              />
            </div>
            <div>
              <Image
                src="/images/github-icon.svg"
                height={140}
                width={140}
              />
            </div>
          </div>
        </div>
        <div className="text-center mb-14 mx-5 md:mx-10">
          <p className="text-4xl font-mono mt-10 pt-4 pb-4">Studying</p>
          <div className="flex justify-center space-x-8">
            <div>
              <Image
                src="/images/typescript-icon.svg"
                height={120}
                width={120}
              />
            </div>
            <div>
              <Image
                src="/images/php.svg"
                height={140}
                width={140}
              />
            </div>
            <div>
              <Image
                src="/images/laravel.svg"
                height={120}
                width={120}
              />
            </div>
            <div>
              <Image
                src="/images/nodejs.svg"
                height={140}
                width={140}
              />
            </div>
            <div>
              <Image
                src="/images/docker-icon.svg"
                height={130}
                width={130}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={utilStyles.section1}>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-mono border-b-2 border-gray-200">About Me</h1>
              <table className="table table-auto ml-8 mr-5 sm:ml-16 mt-10 text-md">
                <tbody>
                  <tr>
                    <td className="w-40 sm:w-56">Live</td>
                    <td>Osaka</td>
                  </tr>
                  <tr>
                    <td>Ocupation</td>
                    <td>Physical Therapist</td>
                  </tr>
                  <tr>
                    <td className="inline-block align-top ">Education</td>
                    <td>Graduate Shool (master)</td>
                  </tr>
                  <tr>
                    <td className="inline-block align-top">Programmings</td>
                    <td>HTML, CSS, JavaScript, React, Next.js</td>
                  </tr>
                  <tr>
                    <td className="inline-block align-top">Hobby</td>
                    <td>Music, Basketball, Comics</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-7 mb-5">
                <Link href="/posts/Profile">
                  <button className="shadow-lg px-4 py-2 mt-5 bg-gradient-to-r hover:bg-gradient-to-l from-cyan-400 to-blue-700 text-lg text-white font-semibold rounded">To Profile</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={utilStyles.section2}>
            <div className="flex justify-center">
              <h1 className="text-zinc-600 text-4xl text-mono border-b-2 border-gray-400">Works</h1>
            </div>
            <div className="flex flex-wrap justify-center mb-10 mt-16 mx-5 space-x-0 sm:space-x-10">
              <div className="text-center mt-5">
                <Link href="/posts/PortforioSite">
                  <img src="/images/zonoworksImg.jpg" alt="works01の画像" className=" max-h-60 mb-3 shadow-lg transition-all duration-300 cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none  hover:duration-300" />
                </Link>
                <Link href="/posts/PortforioSite">
                  <a className="font-bold">ポートフォリオサイト</a>
                </Link>
              </div>
              <div className="text-center mt-5">
                <Link href="/posts/PortforioSite">
                  <img src="/images/zonoworksImg.jpg" alt="works01の画像" className=" max-h-60 mb-3 shadow-lg transition-all duration-300 cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none  hover:duration-300" />
                </Link>
                <Link href="/posts/PortforioSite">
                  <a className="font-bold">ポートフォリオサイト</a>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/posts/Works">
                <button className="shadow-lg px-4 py-2 mt-5 bg-gradient-to-r hover:bg-gradient-to-l from-slate-400 to-gray-700 text-lg text-white font-semibold rounded">To Works</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20 ">
          <h1 className="text-blue-800 text-4xl text-mono border-b-2 border-blue-500 w-30">Contact</h1>
          <p className="text-md sm:text-lg font-bold text-center mt-10 mb-16">制作物に関するご質問や各種ご相談、オファー等<br />
            お気軽にお問い合わせください。</p>
          <div>
            <Link href="/posts/Contact">
              <button className="shadow-lg px-4 py-2 mb-16 bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-800 text-lg text-white font-semibold rounded">To Contact</button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About;