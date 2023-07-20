import React from "react";

const MobileMenuToggle = ({ toggle, setToggle }) => {
  return (
    <button
      className="text-gray-500 relative focus:outline-none"
      onClick={() => setToggle(!toggle)}
    >
        <div className="block absolute grid grid-cols-1 gap-1 content-center w-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            aria-hidden="true"
            className={`block h-0.5 ${toggle ? "w-8" : "w-6"} bg-gray-100 transform transition-all duration-500 ease-in-out ${
              toggle ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block h-0.5 bg-gray-100 transform transition duration-500 ease-in-out ${
              toggle ? "opacity-0" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block h-0.5 bg-gray-100 transform transition duration-500 ease-in-out ${
              toggle ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
    </button>
  );
};

export default MobileMenuToggle;