import React  from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./Priheadr.scss";

function Priheadr() {

  return (
    <div className="msgs-hdr">
      <section className="prihdr-scn-1">
        <div>
          <h2>Messages</h2>
          {/* Add the rest of your messages section JSX code */}
        </div>
        <div>
          <button>
            <EditOutlinedIcon />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Priheadr;


