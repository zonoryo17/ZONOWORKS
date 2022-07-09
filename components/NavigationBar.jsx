import NavigationStyles from "../styles/navigation.module.scss";
import Link from "next/link";
import React, {useState} from "react"

const NavigationBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <React.Fragment>
      <header id="header" className={NavigationStyles.header}>
        <div className={NavigationStyles.logo}>
          <Link href="/">
            <a className={NavigationStyles.logo}>ハンバーガー♡</a>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">
              <a>メニュー</a>
              </Link>
            </li>
            <li>
              <Link href="/">
              <a>メニュー</a>
              </Link>
            </li>
            <li>
              <Link href="/">
              <a>メニュー</a>
              </Link>
            </li>
            <li>
              <Link href="/">
              <a>メニュー</a>
              </Link>
            </li>
            <li>
              <Link href="/">
              <a>メニュー</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>メニュー</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={NavigationStyles.container}>
          <div className={NavigationStyles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? NavigationStyles.open : undefined}></span>
            <span className={openMenu ? NavigationStyles.open : undefined}></span>
            <p className={openMenu ? NavigationStyles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
      <div className={`${NavigationStyles.drawerMenu} ${openMenu ? NavigationStyles.open : undefined}`}>
        <ul>
          <div className={NavigationStyles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="/posts/Profile">
              <a>
                <p className={NavigationStyles.mainTitle}>Profile</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts/Works">
            <a>
              <p className={NavigationStyles.mainTitle}>Works</p>
            </a>
            </Link>
          </li>
          <li>
            <Link href="/posts/Contact">
            <a>
              <p className={NavigationStyles.mainTitle}>Contact</p>
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NavigationBar;