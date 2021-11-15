import React, { Component } from 'react'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import NotFound from './Pages/NotFound';



class App extends Component {
  render() {
    const title = "Gringo"
    return (
      <BrowserRouter>
      <div>
          <nav>
            <ul style={{listStyle:"none"}}>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
          </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies/:id" component={Movies}/>
        <Route path="*" component={NotFound} />
      </Switch>
      </BrowserRouter>

    )
  }
}

export default App
