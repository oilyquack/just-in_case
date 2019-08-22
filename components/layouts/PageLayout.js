import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const PageLayout = ({ children, meta }) => (
  <div>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Head>
    <div>{children}</div>
  </div>
);

export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};
