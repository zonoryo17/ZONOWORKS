import Link from "../node_modules/next/link";
import Images from "./atoms/Images";

const Header = () => {
  return (
    <header className="flex justify-between items-center mt-3 mb-5">
      <Link href="/">
        <a>
          <Images
            img="/images/zonoworks2.jpg"
            height={50}
            width={230}
          />
        </a>
      </Link>
      <div className="flex space-x-8">
        <Link href="/posts/Profile"><a> Profile </a></Link>
        <Link href="/posts/Works"><a> Works </a></Link>
        <Link href="/posts/Contact"><a> Contact </a></Link>
      </div>
    </header>
  );
}

export default Header;