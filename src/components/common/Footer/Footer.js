import React from 'react';
import styles from './Footer.module.scss';


const Footer = () => (
  <footer className={styles['footer']}>
    <div className={styles['footer-logo']}>
      <span className={styles['footer-logo-img']} />
      <span className={styles['footer-logo-txt']}>Waffle</span>
    </div>
    <span className={styles['footer-info']}>© Waffle.lol, 2018</span>
  </footer>
);

export default Footer;
