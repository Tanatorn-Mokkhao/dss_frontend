import React from "react";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
function Layout(props) {
  return (
    <div>
      <Header />
      <Sidebar> {props.children}</Sidebar>
    </div>
  );
}

export default Layout;
