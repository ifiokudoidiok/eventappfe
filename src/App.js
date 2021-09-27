import React from "react";
import { Route, Switch } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import { Home } from './components/Home';
import { AddEvent } from './components/AddEvent';
import { EditEvent } from './components/EditEvent';


// import "./styles.css";

export default function App() {
  return (
    <GlobalProvider>
    <div >
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddEvent} exact />
          <Route path="/edit/:id" component={EditEvent} exact />
        </Switch>
    </div>
    </GlobalProvider>
  );
}
