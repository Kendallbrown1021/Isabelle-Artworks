import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerNav}>
        <ul className={styles.footerLinkList}>
          <li className={styles.footerLink}>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className={styles.footerLink}>
            <Link href="/the-artist">The Artist</Link>
          </li>
          <li className={styles.footerLink}>
            <Link href="/commissions">Commissions</Link>
          </li>
          <li className={styles.footerLink}>
            <Link href="/workshops">Workshops</Link>
          </li>
          <li className={styles.footerLink}>
            <Link href="/donations">Donations</Link>
          </li>
          <li className={styles.footerLink}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <h5 className={styles.footerHeader}>Issabelle Artworks</h5>
      <p className={styles.footerSubHeader}>Page created by Kendall Brown</p>
    </section>
  );
};

export default Footer;
