import Image from 'next/image';
import Layout from '../components/layout';
import LoginForm from '../components/templatates/loginForm';

const About = () => {
  return (
    <>
      <Layout>
        <div>
          <Image
            priority
            src="/images/keshiki.jpg"
            height={500}
            width={2000}
          />
        </div>
        <div className="bg-white py-8 px-4 lg:py-16 grid grid-cols-6 justify-items-center">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500  sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold uppercase leading-tight col-start-2 col-span-4 w-max">
            理学療法士からエンジニアへ<br />
            日本、世界へ発信する
          </h2>
        </div>
        <div className="text-center mt-8">
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
        <div className="text-center">
          <p className="text-4xl font-mono mt-4 pt-4 pb-4">Studying</p>
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
        <LoginForm />
      </Layout>
    </>
  )
}

export default About;