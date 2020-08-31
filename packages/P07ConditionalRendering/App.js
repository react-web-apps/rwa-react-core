import React, { Component } from 'react';

import LoginControl from './C01ConditionalRendering'
import Mailbox from './C02Maibox'
import Page from './C03WarningBanner'


class App extends Component {

  
    render() {
      const messages = ['React', 'Re: React', 'Re:Re: React'];
  
      return (
        <div className="App">
          <LoginControl />
          <br /> <br />
          <Mailbox unreadMessages={messages} />
          <br /> <br />
          <Page />
  
        </div>
      );
    }
  }

  export default App;