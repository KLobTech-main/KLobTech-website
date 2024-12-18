import React from "react";
import { Link } from "react-router-dom";
import { useDropdownState } from "./useDropdownState";
import SubMenu from "./SubMenu";
import MobileMenu from "./MobileMenu";
import { servicesData } from "./serviceData";
import "./Navbar.css";

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
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="desktop-navigation">
            <div className="desktop-nav-items">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <div className="services-dropdown" onMouseLeave={handleMenuLeave}>
                <button
                  onMouseEnter={() => handleMenuHover("services")}
                  className={`services-dropdown-trigger ${
                    activeMenu === "services" ? "active" : ""
                  }`}
                >
                  Services
                </button>
                {activeMenu === "services" && (
                  <div className="services-dropdown-menu">
                    {servicesData.map((service) => (
                      <div
                        key={service.name}
                        onMouseEnter={() => handleSubmenuHover(service.name)}
                        onMouseLeave={() => handleSubmenuHover("")}
                        className="services-dropdown-item"
                      >
                        <Link
                          to={service.path}
                          className="services-dropdown-link"
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
              <Link to="/faq" className="nav-link">
                FAQ
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-toggle">
            <button onClick={toggleMobileMenu} className="mobile-menu-button">
              <span className="screen-reader-text">Open main menu</span>
              <div className="mobile-menu-icon">
                <span
                  className={`menu-icon-line ${
                    isMobileMenuOpen ? "rotate-down" : ""
                  }`}
                />
                <span
                  className={`menu-icon-line ${isMobileMenuOpen ? "hide" : ""}`}
                />
                <span
                  className={`menu-icon-line ${
                    isMobileMenuOpen ? "rotate-up" : ""
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
