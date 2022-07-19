
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AddModel from './components/AddModel';

import SigninCopy from './components/SigninCopy';
import Login from './components/Login';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route element={<Home></Home>} path="home" />
     <Route element={<AddModel></AddModel>} path="addmodel" />
     <Route element={<Login/>} path="login" />
     
     <Route element={<SigninCopy></SigninCopy>} path="signincopy" />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
