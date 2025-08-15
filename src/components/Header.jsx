import React, { useState } from "react";
import styles from "../theme/header.module.css";
import { NavItems } from "./NavItems";
import { NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sidebar } from "./Sidebar";
import { createPortal } from "react-dom";

export const Header = () => {
  const location = useLocation();

  // check if link leads to current page is active
  const isActive = (path) => {
    return location.pathname === path
      ? `${styles.navLink} ${styles.active}`
      : `${styles.navLink}`;
  };

  // opens/closes the sidebar
  const toggleSideBar = () => {
    setSidebar((prev) => !prev);
    console.log(sidebar);
  };

  // hide sidebar at fist
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <NavLink to="/"><h3>JIA</h3></NavLink>
      </div>

      <div className={styles.navLinks}>
        {NavItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.url}
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.activeLink}`
                : `${styles.link} ${styles.inactiveLink}`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>

      <button className={styles.hamburger} onClick={toggleSideBar}>
        <RxHamburgerMenu />
      </button>
      {/* Conditional rendering of sidebar */}
      {sidebar &&
      
        createPortal(
          <>
            <Sidebar
              NavItems={NavItems}
              isActive={isActive}
              toggleSideBar={toggleSideBar}
            />
          </>,
          document.body
        )
        }
    </nav>
  );
};
