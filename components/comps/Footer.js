import React from 'react';

import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      &copy;{' '}
      <a
        className={styles['footer-anchor']}
        href="https://www.olliecrook.dev"
        rel="noopener noreferrer"
        target="_blank"
      >
        Ollie Crook
      </a>{' '}
      {new Date().getFullYear()}
    </p>
    Twitter:{' '}
    <a
      className={styles['footer-anchor']}
      href="http://www.twitter.com/oilyquack"
      rel="noopener noreferrer"
      target="_blank"
    >
      @oilyquack
    </a>
  </footer>
);

export default Footer;
