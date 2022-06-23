import Link from "next/link";
import styles from './layout.module.css';
import Image from 'next/image';

import "remixicon/fonts/remixicon.css";

export default function Footer() {
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 h-8">
        <footer className={styles.footer}>
          <div>
            <div style={{ display: "flex" }}>
              <div className="title" style={{ margin: "auto" }}>
                <Link href="./posts/Profile"><a style={{ marginRight: "30px" }}> Profile </a></Link>
                <Link href="./posts/Works"><a style={{ marginRight: "30px" }}> Works </a></Link>
                <Link href="./posts/Contact"><a> Contact </a></Link>
              </div>
            </div>
            <div className={styles.footerIcons}>
              <Link href="https://twitter.com/zonoryo03">
                <a style={{ marginRight: "10px" }}>
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
            <p style={{ marginTop: "30px" }}>&copy; 2022 ZONOWORKS ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </div>
    </>
  );
};