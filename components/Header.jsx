import Link from "next/link";
import Images from "./atoms/Images";
import React, {useState} from "react";
import NavigationStyles from "../styles/navigation.module.scss";
import { MdMenu } from "react-icons/md";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <>
    <header id="header" className="flex justify-between items-center mt-7 mb-5 mx-5 sm:mx-10">
      <Link href="/">
        <a>
          <Images
            img="/images/zonoworks2.jpg"
            height={50}
            width={230}
          />
        </a>
      </Link>
      <div className="space-x-8 hidden md:flex">
        <Link href="/Profile"><a> Profile </a></Link>
        <Link href="/Works"><a> Works </a></Link>
        <Link href="/Link"><a> Link </a></Link>
        <Link href="/Contact"><a> Contact </a></Link>
      </div>
      <div className="md:hidden cursor-pointer" onClick={() => toggleMenu()}>
        <MdMenu className={openMenu ? NavigationStyles.open : undefined} size="2em" />
      </div>
    </header>
    <div className={`${NavigationStyles.drawerMenu} ${openMenu ? NavigationStyles.open : undefined}`}>
    <ul>
      <div className={NavigationStyles.close} onClick={() => toggleMenu()}>
        <span></span>
        <span></span>
      </div>
      <li>
        <Link href="/Profile">
          <a>
            <p className={NavigationStyles.mainTitle}>Profile</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/Works">
        <a>
          <p className={NavigationStyles.mainTitle}>Works</p>
        </a>
        </Link>
      </li>
      <li>
        <Link href="/Link">
        <a>
          <p className={NavigationStyles.mainTitle}>Link</p>
        </a>
        </Link>
      </li>
      <li>
        <Link href="/Contact">
        <a>
          <p className={NavigationStyles.mainTitle}>Contact</p>
        </a>
        </Link>
      </li>
    </ul>
  </div>
  </>
    // <NavigationBar />
  );
}

export default Header;