import Header from "./Header";


const Layout = (props) => (
  <div>
    <Header />
    {props.children}
    <style jsx>
      {`
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      `}
    </style>
  </div>
);

export default Layout;
