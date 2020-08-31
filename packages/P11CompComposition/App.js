import React, { Component } from 'react';

import { WelcomeDialog, SignUpDialog } from './P11CompComposition'

class App extends Component {
  render() {


    return (
      <div className="App">

        <WelcomeDialog />

        <SignUpDialog />



      </div>
    );
  }
}

export default App;