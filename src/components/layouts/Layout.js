import { Fragment } from "react";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="Layout">{children}</main>
    </Fragment>
  );
};

export default Layout;
