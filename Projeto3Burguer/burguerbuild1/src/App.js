import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurguerBuild from './containers/BurguerBuilder/BurguerBuild';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurguerBuild />
        </Layout>
      </div>
    );
  }
}

export default App;
