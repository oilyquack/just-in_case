import { css } from 'emotion';
import React from 'react';

const titleStyle = css`
  font-family: 'Lucida Console', Monaco, monospace;
  text-align: center;
`;

const Title = () => (
  <div className={titleStyle}>
    <h1>just-in_case</h1>
    <p>When the case matches the case, click the case. OK?</p>
  </div>
);

export default Title;
