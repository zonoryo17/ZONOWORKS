import Link from "next/link";
import "remixicon/fonts/remixicon.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-blue-800 text-white mt-5">
        <div className="flex justify-center space-x-12 pt-5">
          <Link href="/posts/Profile"><a> Profile </a></Link>
          <Link href="/posts/Works"><a> Works </a></Link>
          <Link href="/posts/Contact"><a> Contact </a></Link>
        </div>
        <div className="flex justify-center pt-10">
          <Link href="https://twitter.com/zonoryo03">
            <a className="mr-3">
              {/* アイコンをセットする */}
              <i className="ri-twitter-fill" ></i>
            </a>
          </Link>
          <Link href="https://github.com/zonoryo17">
            <a>
              {/* アイコンをセットする */}
              <i className="ri-github-fill"></i>
            </a>
          </Link>
        </div>
        <p className="text-center pt-10 pb-3">&copy; 2022 ZONOWORKS All rights reserved.</p>
      </footer>
    </>
  );
};