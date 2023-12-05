import React from "react";
import "./styles/attributes.scss"

function Attributes({ attributes }) {
  if (!attributes || attributes.length === 0) {
    return <div>No attributes available</div>;
  }

  return (
    <div className="attributes">
      <ul>
        {attributes.map((attribute, index) => (
          <li key={index}>{attribute}</li>
        ))}
      </ul>
    </div>
  );
}

export default Attributes;
