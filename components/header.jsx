import Link from "next/link";

const Header = () => (
  <div>
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
    <ul>
      <li>
        <Link href="/recipes/appetizers">
          <a>Appetizers</a>
        </Link>
      </li>
      <li>
        <Link href="/recipes/beer">
          <a>Beer</a>
        </Link>
      </li>
      <li>
        <Link href="/recipes/desserts">
          <a>Desserts</a>
        </Link>
      </li>
      <li>
        <Link href="/recipes/drinks">
          <a>Drinks</a>
        </Link>
      </li>
      <li>
        <Link href="/recipes/entrees">
          <a>Entrées</a>
        </Link>
      </li>
      <li>
        <Link href="/recipes/sides">
          <a>Sides</a>
        </Link>
      </li>
      <li>
        <Link href="/recipes/soups_stews">
          <a>Soups / Stews</a>
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
  </div>
);

export default Header;
