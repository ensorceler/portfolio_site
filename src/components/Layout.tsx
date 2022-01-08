import React from "react";
import Nav from "./Navbar/Nav";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Nav />
      {children}
    </React.Fragment>
  );
};

export default Layout;
