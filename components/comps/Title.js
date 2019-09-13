import { css } from 'emotion';
import React from 'react';

import Heading from './core/Heading';
import Paragraph from './core/Paragraph';

const titleStyle = css`
  margin-bottom: 20px;
`;

const Title = () => (
  <div className={titleStyle}>
    <Heading level="1" text="just-in_case" />
    <Paragraph text="When the case matches the case, click the case. OK?" />
  </div>
);

export default Title;
