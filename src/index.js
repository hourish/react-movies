import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Movies from "./components/pages/Movies"
import Movie from "./components/pages/Movie"
import Favorites from "./components/pages/Favorites"


function App () {
  return( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/movies/:id" component={Movie} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  )
}

render(<App />, document.getElementById('root'));
