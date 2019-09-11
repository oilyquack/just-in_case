import { css } from 'emotion';
import React from 'react';

import theme from '../../theme/index';

const titleStyle = css`
  ${theme.typography.heading};
`;

const Title = () => (
  <div className={titleStyle}>
    <h1>just-in_case</h1>
    <p>When the case matches the case, click the case. OK?</p>
  </div>
);

export default Title;
