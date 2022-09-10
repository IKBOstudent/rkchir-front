import React from "react";

import Header from "@components/Header";
import Navigation from "./Navigation";
import SideBar from "./SideBar";
import ProductsBlock from "./ProductsBlock";

const Home = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <SideBar />
        <Navigation />
        <ProductsBlock />
      </div>
    </div>
  );
};

export default Home;
