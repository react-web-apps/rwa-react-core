import React, { Component } from 'react';
import Welcome from './Welcome';
import Comment from './Comment';


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};


const App = () => {
  return (
    <div className="App">

      <Welcome name="ajit" />

      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />

    </div>
  )
}


// class App extends Component {

//   render() {

//     const comment = {
//       date: new Date(),
//       text: 'I hope you enjoy learning React!',
//       author: {
//         name: 'Hello Kitty',
//         avatarUrl: 'http://placekitten.com/g/64/64',
//       },
//     };

//     return (
//       <div className="App">

//         <Welcome name="ajit" />


//         <Comment
//           date={comment.date}
//           text={comment.text}
//           author={comment.author}
//         />

//       </div>
//     );
//   }
// }

export default App;