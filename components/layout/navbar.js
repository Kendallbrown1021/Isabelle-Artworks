import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <header
      className={
        !isNavExpanded ? `${styles.header}` : `${styles.header} ${styles.show}`
      }
    >
      <div className={styles.logo}>
        <Link href="/">Isabelle Artwork</Link>
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
          <li className={styles.home}>
            <Link href="/">
              <a
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Gallery
              </a>
            </Link>
          </li>
          <li>
            <Link href="/the-artist">
              <a
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                The Artist
              </a>
            </Link>
          </li>
          <li>
            <Link href="/commissions">
              <a
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Commissions
              </a>
            </Link>
          </li>
          <li>
            <Link href="/workshops">
              <a
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Workshops
              </a>
            </Link>
          </li>
          <li>
            <Link href="/donations">
              <a
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Donations
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
