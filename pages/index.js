import {css, injectGlobal} from '@emotion/css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

import Footer from '../components/comps/Footer';
import Title from '../components/comps/Title';

const HomeWithNoSSR = dynamic(() => import('../components/domain/Home'), {
  ssr: false,
});

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const pageLayoutStyle = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const meta = {
  title: 'just-in_case',
  description: 'Can you be the case master?',
};

const Index = () => (
  <>
    <Head>
      <title>{meta.title}</title>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="description" content={meta.description} />
    </Head>
    <div className={pageLayoutStyle}>
      <Title />
      <HomeWithNoSSR />
      <Footer />
    </div>
  </>
);

export default Index;
