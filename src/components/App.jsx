import React, { useState } from 'react';
import Form from './Form';

// var userIsRegistered = true;

function App() {
  const [userIsRegistered, setRegistered] = useState(true);

  console.log(userIsRegistered);

  function handleRegistration() {
    setRegistered(false);
  }

  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
      <button onClick={handleRegistration}>Change state</button>
    </div>
  );
}

export default App;

//conditional rendering, separations of concerns, ternary operator

