import React from "react";

const IconButton = ({ icon, props, textProps, text }) => {
  return (
    <div className="size-min">
      <button className={props}>
       {icon}
       <p className={`text-black ${textProps}`}>{text}</p>
      </button>
    </div>
  );
};

export default IconButton;