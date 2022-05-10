import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Appbar from  './components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(  
    <>
    <BrowserRouter>
    <Appbar/>

    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>

    </Routes>
    
    </BrowserRouter>
      

    
            
           
                  
    </>        
            );


//
// const Time=()=>{  
//     const time=new Date().toLocaleTimeString();
//     return <h1 className='time'>Time: {time} </h1>
// }

// const value=true;

// const names='Vinay';

// const arr1=['Vasanthi','Triveni','Durgadevi','Manoj'];


// // Hooks use karenge || 