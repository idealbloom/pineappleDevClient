import React from 'react';
import { Route } from 'react-router-dom';
import { SignIn, SignUp } from './login';

function App() {
  return (
    <div className="App">
      {/* <SignIn />
      <SignUp /> */}
      <Route exact path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
    </div>
  );
}

export default App;
