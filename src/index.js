import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Rooter, Routes, Route, Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Nav from './Components/Nav';
import Contact from './Pages/Contact';
import NewTask from './Pages/NewTask';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rooter>
     <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}> </Route>
        <Route path='/contact' element={<Contact/>}> </Route>
        <Route path='/newtask' element={<NewTask/>}> </Route>
        
      </Routes>

    </Rooter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
