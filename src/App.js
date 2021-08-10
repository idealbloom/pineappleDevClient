import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { SignIn, SignUp, PhoneAuth } from './pages';
import IBContextProvider from './context/IBContext';

function App() {
  return (
    <div className="App">
      {/* <SignIn />
      <SignUp /> */}
      <IBContextProvider>
        <Switch>
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/phoneAuth" component={PhoneAuth} />
          <Redirect path="*" to="/signIn" />
        </Switch>
      </IBContextProvider>
    </div>
  );
}

export default App;
