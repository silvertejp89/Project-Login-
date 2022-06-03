import React from 'react';
import Login from './Login';

var isLoggedIn = false;

// function conditionallyRender() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;

//conditional rendering, separations of concerns

