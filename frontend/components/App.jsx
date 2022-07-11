import GreetingContainer from "./greeting/greeting_container";
import login_form_container from "./sessionform/login_form_container";
import signup_form_container from "./sessionform/signup_form_container";
import React from "react";
import { Route } from "react-router-dom";
const App = () => (
    <div>
      <header>
        <h1 className="etsme">Etsme</h1>
        <GreetingContainer />
      </header>
  
      <Route path="/login" component={login_form_container} />
      <Route path="/signup" component={signup_form_container} />
    </div>
  );

export default App;