import React, { useState } from "react";
import styles from "../styles/navbar.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logo__block}>
          w<span>e</span>
        </div>
        <Link href="/" passHref>
          <a className={styles.logo__item}>
            R<span>devs</span>
          </a>
        </Link>
      </div>
      <div className={styles.nav__items}>
        <div className={styles["menu-icon"]} onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={
            click
              ? classNames(styles["nav-menu"], styles.active)
              : styles["nav-menu"]
          }
        >
          <li className={styles["nav-item"]}>
            <Link href="/" passHref>
              <a className={styles.link} onClick={closeMobileMenu}>
                Home
              </a>
            </Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/about" passHref>
              <a onClick={closeMobileMenu}>About us</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
