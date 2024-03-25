import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, href, action }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <Link
            to={href}
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {action}
          </Link>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  );
};

export default Header;
