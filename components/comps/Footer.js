import { css } from '@emotion/css';
import React from 'react';

import theme from '../../theme/index';

const footerStyle = css`
  background: ${theme.colors.neutral};
  bottom: 0;
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.primary};
  padding: 5px 0 10px 0;
  position: fixed;
  text-align: center;
  width: 100vw;
`;

const anchorStyle = css`
  a:active {
    color: ${theme.colors.secondaryActive};
    text-decoration: underline;
  }
  &:link {
    color: ${theme.colors.secondary};
    text-decoration: none;
  }
  &:visited {
    color: ${theme.colors.secondary};
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <footer className={footerStyle}>
    <p>
      &copy;{' '}
      <a
        className={anchorStyle}
        href="https://www.olliecrook.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Ollie Crook
      </a>{' '}
      {new Date().getFullYear()}
    </p>
    Twitter:{' '}
    <a
      className={anchorStyle}
      href="http://www.twitter.com/oilyquack"
      rel="noopener noreferrer"
      target="_blank"
    >
      @oilyquack
    </a>
  </footer>
);

export default Footer;
