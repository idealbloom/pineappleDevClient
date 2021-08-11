import React from 'react';
import { Route } from 'react-router-dom';
import { SignIn, SignUp, PhoneAuth, Findps, Findps2, Covtrap } from './login';

function App() {
  return (
    <div className="App">
      <IBContextProvider>
        <Route exact path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/phoneAuth" component={PhoneAuth} />
        <Route path="/findps" component={Findps} />
        <Route path="/findps2" component={Findps2} />
        <Route path="/covtrap" component={Covtrap} />
      </IBContextProvider>
      {/* <SignIn />
      <SignUp />
      <Find password 
      Get a security code */}
      
    </div>
  );
}

export default App;
