import React from 'react';
import Helmet from 'react-helmet';

import { siteName } from 'config';

import './styles.scss';


export default () => (
  <main className='container-fluid'>

    <Helmet titleTemplate='%s' title={siteName} />

  </main>
);
