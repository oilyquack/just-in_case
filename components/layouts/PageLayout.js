import { css } from 'emotion';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const pageLayoutStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageLayout = ({ children, meta }) => (
  <div>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Head>
    <div className={pageLayoutStyle}>{children}</div>
  </div>
);

export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};
