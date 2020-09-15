import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./container/Home";
import Signin from "./container/Signin";
import Signup from "./container/Signup";
import { useDispatch, useSelector } from "react-redux";



function App() {

  // const dispatch = useDispatch();
  // const auth = useSelector(state => state.auth)

  // useEffect(() => {
  //   // eslint-disable-next-line
  //   if (!auth.authenticate) {
  //     dispatch(isUserLoggedIn());
  //   }
  // }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
