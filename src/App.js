import React from 'react';

import { Route } from 'react-router-dom';
import { SignIn, SignUp, PhoneAuth, Findps, Findps2 } from './login';

function App() {
  return (
    <div className="App">
      {/* <SignIn />
      <SignUp /> */}
      <Route exact path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/phoneAuth" component={PhoneAuth} />
      <Route path="/findps" component={Findps} />
      <Route path="/findps2" component={Findps2} />
    </div>
  );
}

export default App;
