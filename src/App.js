import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
