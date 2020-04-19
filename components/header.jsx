import Link from "next/link";

const Header = () => (
  <div>
    <Link href="/">
        <a>Home</a>
    </Link>
    <Link href="/about">
        <a>About</a>
    </Link>
    <style jsx>{`
    border: 1px solid black;
    margin-bottom: 10px;
    `}</style>
  </div>
);

export default Header;
