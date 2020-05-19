import Link from "next/link";

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/recipes">
          <a>All Recipes</a>
        </Link>
      </li>
      <li>
        <Link href="/admin">
          <a>Admin</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      // border: 1px solid black;
      margin-bottom: 10px;

      li {
        display: inline;
        list-style-type: none;
        padding-right: 10px;
      }
    `}</style>
  </nav>
);

export default Header;
