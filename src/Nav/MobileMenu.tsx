import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "./serviceData";

interface MobileMenuProps {
  isOpen: boolean;
  activeMenu: string | null;
  activeSubmenu: string | null;
  onMenuClick: (menu: string) => void;
  onSubmenuClick: (submenu: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeMenu,
  activeSubmenu,
  onMenuClick,
  onSubmenuClick,
}) => {
  return (
    <div
      className={`lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="py-2">
        <Link
          to="/"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
        >
          About
        </Link>
        <Link
          to="/faq"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
        >
          FAQ
        </Link>

        {/* Services menu button */}
        <div>
          <button
            onClick={() => onMenuClick("services")}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
          >
            Services
          </button>
          <div
            className={`bg-grey-500 transform transition-all duration-300 ease-in-out ${
              activeMenu === "services"
                ? "max-h-auto opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {servicesData.map((service) => (
              <div key={service.name}>
                {/* Render button to toggle submenu only if there are subItems */}
                {service.subItems && service.subItems.length > 0 ? (
                  <>
                    <button
                      onClick={() => onSubmenuClick(service.name)}
                      className="w-auto text-left px-6 py-2 text-grey-700 hover:bg-gray-100 transition-colors duration-150"
                    >
                      {service.name}
                    </button>
                    <div
                      className={`bg-gray-100 transform transition-all duration-300 ease-in-out ${
                        activeSubmenu === service.name
                          ? "max-h-auto opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      {service.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-8 py-2 text-gray-700 hover:bg-gray-200 transition-colors duration-150"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  // Direct link if no subItems
                  <Link
                    to={service.path}
                    className="block px-6 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    {service.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <Link
          to="/contact"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
