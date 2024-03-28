import React from "react";

const IconButton = ({ icon, props, textProps, text, ...rest }) => {
  return (
    <div className="size-min">
      <button className={props} {...rest}>
       {icon}
       <p className={`text-black ${textProps}`}>{text}</p>
      </button>
    </div>
  );
};

export default IconButton;