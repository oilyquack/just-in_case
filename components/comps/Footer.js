import { css } from 'emotion';
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
    <p>&#169; Ollie Crook 2019</p>
    Twitter:{' '}
    <a className={anchorStyle} href="http://www.twitter.com/oilyquack">
      @oilyquack
    </a>
  </footer>
);

export default Footer;
