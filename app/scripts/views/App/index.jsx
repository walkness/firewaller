import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import { intlShape } from 'react-intl';

import Home from 'AppViews/Home';
import Rules from 'AppViews/Rules';

import { siteName } from 'config';


const App = (props, context) => (
  <div id='app'>

    <Helmet
      title=''
      defaultTitle=''
      titleTemplate={`%s | ${siteName}`}
      htmlAttributes={{
        lang: context.intl.locale,
      }}
      meta={[
        { charset: 'utf-8' },
        { 'http-equiv': 'Content-type', content: 'text/html; charset=utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
    />

    <Route exact path='/' component={Home} />
    <Route path='/rules' component={Rules} />

  </div>
);

App.contextTypes = {
  intl: intlShape.isRequired, // eslint-disable-line react/no-typos
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {
})(App);
