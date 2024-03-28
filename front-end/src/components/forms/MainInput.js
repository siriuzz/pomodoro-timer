import React from "react";

const MainInput = React.forwardRef(({ placeholder, label, icon, iconAction, ...rest }, ref) => {
  return (
    <div className="mb-1 flex align-center">
      {/* {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )} */}
      <input
        ref={ref}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        placeholder={placeholder}
        {...rest}
      />
      {icon ? (
        <div className="w-6 flex justify-center h-auto">
         <button onClick={iconAction}>
          {icon}
         </button>
        </div>
      ) : null}
      
    </div>
  );
});

export default MainInput;
