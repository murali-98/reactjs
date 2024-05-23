import React from 'react';
//import logo from './logo.svg';
import './App.css';

import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
      <h1>Hello Murali, Welcome to react js</h1>
      </header>
      </div> */
    
         
           <div className='container'>
               <HeaderComponent />
                 <div className="container">
                   <Routes> 
                     <Route path="/" component ={<ListEmployeeComponent/>}></Route>
                     <Route path="/employees" element ={<ListEmployeeComponent />}></Route>
                   
                   </Routes>
                  </div>
               <FooterComponent />
             </div>
        
          
    
  );
}

export default App;
