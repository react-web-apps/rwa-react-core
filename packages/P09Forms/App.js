import React, { Component } from 'react';

import C01FormsControlledComponents from './C01FormsControlledComponents'
import C02TextAreaForm from './C02TextAreaForm'
import C03SelectForm from './C03SelectForm'
import C04MultipleInputForm from './C04MultipleInputForm'

class App extends Component {
  render() {
    return (
      <div className="App">

        <C01FormsControlledComponents />
        <br /><br /><br />
        <C02TextAreaForm />
        <br /><br /><br />
        <C03SelectForm />
        <br /><br /><br />
        <C04MultipleInputForm />

      </div>
    );
  }
}

export default App;