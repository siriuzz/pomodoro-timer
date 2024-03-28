import React from "react";
import { IconButton } from "@/components/ui";
const MainInput = ({ placeholder, label, error, icon,iconAction,  ...rest }) => {
  return (
    <div className="mb-3 flex align-center">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? "border-red-500" : "border-gray-300"
        }`}
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

      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"></div>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default MainInput;
