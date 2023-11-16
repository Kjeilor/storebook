import React from "react";
import emptyInbox from "../../../../../assets/Empty Inbox.png";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import "./components/categories.scss";

function Categories() {
  return (
    <div className="msg-scns">
      <section className="unrd-msgs">
        <div className="unrd-cmpts">
          <h3 className="unrd-lbl">
            <div>
              <span>Unread</span>
            </div>
            <div>
              <span>0</span>
            </div>
          </h3>
        </div>
        <div className="empty-state">
          <div className="unrd-img">
            <img className="emptyunread" src={emptyInbox} alt="0" />
          </div>
          <div>
            <span>You have read all your messages.</span>
          </div>
        </div>
      </section>
      <section className="all-msgs">
        <div className="all-cmpts">
          <h3 className="all-lbl">
            <div>
              <span>All Messages</span>
            </div>
            <div>
              <span>0</span>
            </div>
          </h3>
          <div>
            <button>
              <FilterAltOutlinedIcon />
            </button>
          </div>
        </div>
        <div className="empty-state">
          <div className="img">
            <img className="emptyinbox" src={emptyInbox} alt="0" />
          </div>
          <div>
            <span>Your inbox is currently empty.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
