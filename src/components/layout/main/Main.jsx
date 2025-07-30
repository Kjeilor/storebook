import React from "react";
import Content from "./mainComponents/content/Content";
import Footer from "./mainComponents/footer/Footer";
import "./Main.scss";

function Main() {
  return (
    <div className="m-container">
      <div className="main">
        <main className="cont-container ">
          <Content />
        </main>
        <div className="ftr-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Main;
