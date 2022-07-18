
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AddModel from './components/AddModel';
import Signin from './components/Signin';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route element={<Home></Home>} path="home" />
     <Route element={<AddModel></AddModel>} path="addmodel" />
     <Route element={<Signin></Signin>} path="signin" />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
