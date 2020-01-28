import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurguerBuild from './containers/BurguerBuilder/BurguerBuild';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <BurguerBuild />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
