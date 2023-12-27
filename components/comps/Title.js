import { css } from '@emotion/css';
import React from 'react';

const titleStyle = css`
  margin-bottom: 20px;
`;

const Title = () => (
  <div className={titleStyle}>
    <h1>just-in_case</h1>
    <p>When the case matches the case, click the case. OK?</p>
  </div>
);

export default Title;
