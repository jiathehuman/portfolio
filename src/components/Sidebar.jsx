import styles from "../theme/sidebar.module.css";
import { NavLink } from "react-router-dom";

export const Sidebar = ({ NavItems, isActive, toggleSideBar }) => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.closeBtn} onClick={toggleSideBar}>
        &times;
      </button>
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
  );
};
