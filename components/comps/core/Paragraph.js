import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import theme from '../../../theme';

const paragraphStyle = css`
  ${theme.typography.primary};

  margin-bottom: 8px;
  padding: 4px;
`;

const Paragraph = ({ text }) => {
  return <p className={paragraphStyle}>{text}</p>;
};

export default Paragraph;

Paragraph.defaultProps = {
  text: ''
};

Paragraph.propTypes = {
  text: PropTypes.string
};
