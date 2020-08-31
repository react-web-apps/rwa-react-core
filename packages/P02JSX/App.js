import React from 'react'

const C1 = () => {
    const name = 'Ajit Ratan Singh';
    return (
        <div>
            <h1>Hello, {name}</h1>
        </div>
    )
  }


  const C2 = () => {

    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    return (
        <div>
            <h1>
                Hello, {formatName(user)}!
            </h1>
        </div>
    );
};


const App = () => {
 
    return (
        <div>
            <C1 />
            <C2 />
        </div>
    )
  }


export default App;
