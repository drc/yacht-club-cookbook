import Link from "next/link";

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/recipes">
      <a>All Recipes</a>
    </Link>
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
      border: 1px solid black;
      margin-bottom: 10px;

      li {
          display: inline;
          list-style-type: none;
      }
    `}</style>
  </div>
);

export default Header;
