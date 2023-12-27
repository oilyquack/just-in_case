import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../comps/Footer';
import styles from './PageLayout.module.css'

const PageLayout = ({ children, meta }) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="description" content={meta.description} />
    </Head>
    <div className={styles.pageLayout}>
      {children}
      <Footer />
    </div>
  </>
);

export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
