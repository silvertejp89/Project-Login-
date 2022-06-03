import React from 'react';
import Form from './Form';

// var isLoggedIn = false;
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

//conditional rendering, separations of concerns, ternary operator

