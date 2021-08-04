import React from 'react';

import { Route } from 'react-router-dom';
import { SignIn, SignUp, PhoneAuth, Findps } from './login';

function App() {
  return (
    <div className="App">
      {/* <SignIn />
      <SignUp /> */}
      <Route exact path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/phoneAuth" component={PhoneAuth} />
      <Route path="/findps" component={Findps} />
    </div>
  );
}

export default App;
