import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react';
import './App.css';
import Compra from './components/Compra';
import Home from './components/Home'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Route exact path="/compra" component={Compra}></Route>
        <Route exact path="/" component={Home}></Route>
      </BrowserRouter>
    )
  }
}

export default App;
