import React, { Component } from 'react';

// Passing Arguments to Event Handlers
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

class Counter extends Component {

    // state = { value: 0 };

    // you can also initialise state in React
    // in the constructor:
    constructor() {
        super();
        this.state = {
            value: 0
        }

    }

    //   // f calling bind annoys you, there are two ways you can get around this. 
    //   // If you are using the experimental public class fields syntax, 
    //   // you can use class fields to correctly bind callbacks:

    increment = () => {
        this.setState(prevState => ({
            value: prevState.value + 1
        }));
    }

    decrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1
        }));
    }

    render() {
        return (
            <div>
                {this.state.value}
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter;