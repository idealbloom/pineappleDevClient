import React from 'react';
import { Route } from 'react-router-dom';
import { SignIn, SignUp, PhoneAuth, Findps, Findps2, Covtrap } from './login';

function App() {
  return (
    <div className="App">
      {/* <SignIn />
      <SignUp />
      <Find password 
      Get a security code */}
      <Route exact path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/phoneAuth" component={PhoneAuth} />
      <Route path="/findps" component={Findps} />
      <Route path="/findps2" component={Findps2} />
      <Route path="/covtrap" component={Covtrap} />
    </div>
  );
}

export default App;
