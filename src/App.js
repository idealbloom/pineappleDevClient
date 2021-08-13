import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  SignIn,
  SignUp,
  PhoneAuth,
  Findps,
  Findps2,
  Covtrap,
  AudioMergeTest,
} from './pages';
import IBContextProvider from './context/IBContext';

function App() {
  return (
    <div className="App">
      <IBContextProvider>
        <Switch>
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/phoneAuth" component={PhoneAuth} />
          <Route path="/findps" component={Findps} />
          <Route path="/findps2" component={Findps2} />
          <Route path="/covtrap" component={Covtrap} />
          <Route path="/audioMergeTest" component={AudioMergeTest} />
          <Route path="/" component={SignIn} />
        </Switch>
      </IBContextProvider>
    </div>
  );
}

export default App;
