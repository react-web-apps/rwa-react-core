import React from 'react'

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.

  // https://babeljs.io/docs/en/babel-plugin-transform-class-properties/
  // npm install --save-dev babel-plugin-transform-class-properties

  // .babelrc

  // {
  //   "plugins": ["transform-class-properties"]

  // }
  // https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
        </button>
    );
  }
}

export default LoggingButton