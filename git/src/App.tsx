import React from 'react';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import './App.css';
import Usersignin from './component/singin/signin';
import SignUpForm from './component/singin/register'
import Layout from './component/layout/layout';

import HOME from './component/home/home';
function App() {
  return (
   
    <>
      <BrowserRouter>
        <Routes>
           
            {/* {/* <Route path="/" element ={<SignUpForm/>}/>  */}
            
               
              <Route path ="/" element ={<Layout/>}>
          
               <Route  index  element={<HOME/>}/>  
              <Route path="home" element={<HOME/>}/>
              <Route path="/signup" element ={<SignUpForm/>}/> 
              <Route path="/signin" element={<Usersignin/>}/> 
              
              </Route> 
            


            
              

            {/* </Route>   */}
      </Routes>
    </BrowserRouter >
  </>
  );
}

export default App;
