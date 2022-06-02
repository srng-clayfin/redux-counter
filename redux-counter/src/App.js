import logo from './logo.svg';
import './App.css';
import { Result } from './components/Result';
import { Counter } from './components/Counter';
import { createContext, useState } from 'react';



export const App = () =>
{
  
  
  return (
  
  <div className="App">

          <br /><br /><br />
          <Result />
          <br /><br /><br />
          <Counter />
     
    </div>
  
  );
}

