import React from 'react';
import { Route } from 'react-router-dom';
import { SignIn, SignUp, PhoneAuth } from './login';

function App() {
  return (
    <div className="App">
      {/* <SignIn />
      <SignUp /> */}
      <Route exact path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/phoneAuth" component={PhoneAuth} />
    </div>
  );
}

export default App;
