import React from "react";
import "./newsgrid.css";

const Newsgrid = ({ title, imageUrl, body }) => {
  return (
    <div className="newsgrid">
      <div className="newsimage">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="newscontent">
        <div className="newstitle">
          <h3 className="font-bold text-xs md:text-sm">{title}</h3>
        </div>
        <div className="newsbody">
          <p className="text-xs md:text-sm">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Newsgrid;
