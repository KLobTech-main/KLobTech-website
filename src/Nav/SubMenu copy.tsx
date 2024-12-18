import React from "react";
import { Link } from "react-router-dom";
import { ServiceSubItem } from "./types";

interface SubMenuProps {
  items: ServiceSubItem[];
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <div
      className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg transform transition-all duration-200 ease-in-out opacity-0 scale-95 animate-fadeIn"
      style={{
        animation: "fadeIn 0.2s ease-out forwards",
      }}
    >
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;
