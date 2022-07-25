import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import AddModel from "./components/AddModel";
import Login from "./components/Login";
import ModelBrowser from "./components/ModelBrowser";
import Signup from "./components/Signup";
import UserBrowser from "./components/UserBrowser";
import ViewModel from "./components/viewModel";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home></Home>} path="home" />

          <Route element={<Signup></Signup>} path="signup" />
          <Route element={<Login />} path="login" />
          <Route element={<UserBrowser />} path="userbrowser" />
          <Route element={<AddModel></AddModel>} path="addmodel" />
          <Route element={<ModelBrowser />} path="modelbrowser" />
          <Route element={<ViewModel />} path="viewer" />
          <Route element={<Navigate to="/home" />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
