import React, { Component } from 'react';
import NumberList from './NumberList'
import Blog from './Blog'


class App extends Component {
  render() {

    const numbers = [1, 2, 3, 4, 5];

    const posts = [
      { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
      { id: 2, title: 'Installation', content: 'You can install React from npm.' }
    ]

    return (
      <div className="App">
        <NumberList numbers={numbers} />
        <br /> <br />
        <Blog posts={posts} />,
 
      </div>
    );
  }
}

export default App;