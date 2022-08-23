import React, { useState } from "react";

import Logo from "../../public/images/LOGOISA.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  console.log(isNavExpanded);
  return (
    <header
      className={
        !isNavExpanded ? `${styles.header}` : `${styles.header} ${styles.show}`
      }
    >
      <div className={styles.logo}>
        <Link href="/">
          <Logo className={styles.logoSVG} />
        </Link>
      </div>
      <div>
        {isNavExpanded ? (
          <CloseIcon
            className={styles.hamburger}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          />
        ) : (
          <MenuIcon
            className={styles.hamburger}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          />
        )}
      </div>

      <nav className={isNavExpanded ? styles.navExpanded : styles.nav}>
        <ul>
          <li className={styles.home} onClick={() => setIsNavExpanded(false)}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link href="/the-artist">
              <a>The Artist</a>
            </Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link href="/commissions">
              <a>Commissions</a>
            </Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link href="/workshops">
              <a>Workshops</a>
            </Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link href="/donations">
              <a>Donations</a>
            </Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
