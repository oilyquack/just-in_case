import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import theme from '../../../theme';

const headingStyle = css`
  ${theme.typography.primary};

  margin-bottom: 8px;
  padding: 4px;
`;

const Heading = ({ level, text }) => {
  const ElementType = `h${level}`;

  return <ElementType className={headingStyle}>{text}</ElementType>;
};

export default Heading;

Heading.defaultProps = {
  level: '1',
  text: ''
};

Heading.propTypes = {
  level: PropTypes.string,
  text: PropTypes.string
};
