import React from "react";
import "./newsgrid.css";

const Newsgrid = ({ title, imageUrl, body }) => {
  return (
    <div className="newsgrid">
      <div className="newsimage">
        <img src={imageUrl} />
      </div>
      <div className="newscontent">
        <div className="newstitle">
          <h3>{title}</h3>
        </div>
        <div className="newsbody">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Newsgrid;
