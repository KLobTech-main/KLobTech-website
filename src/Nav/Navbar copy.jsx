import React from "react";
import { Link } from "react-router-dom";
import { useDropdownState } from "./useDropdownState";
import SubMenu from "./SubMenu";
import MobileMenu from "./MobileMenu";
import { servicesData } from "./serviceData";

const Navbar = () => {
  const {
    activeMenu,
    activeSubmenu,
    isMobileMenuOpen,
    handleMenuHover,
    handleMenuLeave,
    handleSubmenuHover,
    handleMobileMenuClick,
    handleMobileSubmenuClick,
    toggleMobileMenu,
  } = useDropdownState();

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="hidden lg:flex items-center">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-150"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-150"
              >
                About
              </Link>
              <div className="relative group" onMouseLeave={handleMenuLeave}>
                <button
                  onMouseEnter={() => handleMenuHover("services")}
                  className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                    activeMenu === "services" ? "text-blue-600" : ""
                  }`}
                >
                  Services
                </button>
                {activeMenu === "services" && (
                  <div
                    className="absolute left-0 top-full w-48 bg-white rounded-md shadow-lg z-50 transform transition-all duration-200 ease-in-out opacity-0 scale-95 animate-fadeIn"
                    style={{
                      animation: "fadeIn 0.2s ease-out forwards",
                    }}
                  >
                    {servicesData.map((service) => (
                      <div
                        key={service.name}
                        onMouseEnter={() => handleSubmenuHover(service.name)}
                        className="relative group/submenu"
                      >
                        <Link
                          to={service.path}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                        >
                          {service.name}
                        </Link>
                        {activeSubmenu === service.name && service.subItems && (
                          <SubMenu items={service.subItems} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-150"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors duration-150"
            >
              <span className="sr-only">Open main menu</span>
              <div className="h-6 w-6 flex flex-col justify-between">
                <span
                  className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />
                <span
                  className={`block w-full h-0.5 bg-current transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeMenu={activeMenu}
        activeSubmenu={activeSubmenu}
        onMenuClick={handleMobileMenuClick}
        onSubmenuClick={handleMobileSubmenuClick}
      />
    </nav>
  );
};

export default Navbar;
