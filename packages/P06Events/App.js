import React, { Component } from 'react';
import ToggleButton from './ToggleButton';
import LoggingButton from './LoggingButton';
import LoggingButton1 from './LoggingButton1';
import ActionLink from './ActionLink'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleButton />
        <br /><br /><br />
        <LoggingButton />
        <br /><br /><br />
        <LoggingButton1 />
        <br /><br /><br />
        <ActionLink />
        <br /><br /><br />
        <Counter />

      </div>
    );
  }
}

export default App;