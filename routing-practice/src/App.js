import './App.css';
import React from 'react';
import Home from './components/Home';
import Input from './components/Input';
import Word from './components/Word';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/:input">
            <Input/>
          </Route>
          <Route exact path="/:word/:bgColor/:color">
            <Word/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
