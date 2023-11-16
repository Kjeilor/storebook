import React from "react";
import "./components/main.scss";

function Main() {
  return (
    <div className="main-wrpr">
      <div className="elmnt-cont">
      <section className ="hdr-scn">
        <div>
          <span>
            Header
          </span>
        </div>
      </section>
      <section className="main-cont">
        <div className="content-area">
          Main
          {/* Add your main content JSX code here */}
        </div>
        <div className="input-box">
          {/* Add the input box and action buttons JSX code here */}
        </div>
      </section>
      </div>
    </div>
  );
}

export default Main;
