import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { SignIn, SignUp, PhoneAuth } from './login';

function App() {
  return (
    <div className="App">
      {/* <SignIn />
      <SignUp /> */}
      <Switch>
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/phoneAuth" component={PhoneAuth} />
        <Redirect path="*" to="/signIn" />
      </Switch>
    </div>
  );
}

export default App;
