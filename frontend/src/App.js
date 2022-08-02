import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import AddModel from "./components/AddModel";
import Login from "./components/Login";
import ModelBrowser from "./components/ModelBrowser";
import Signup from "./components/Signup";
import UserBrowser from "./components/UserBrowser";
import ViewModel from "./components/viewModel";
import Header from "./components/Header";
import { AppProvider } from "./AppContext";
import { useState } from "react";
import Authorisor from "./components/Auth"
function App() {
  const [ currentUser,setCurrentUser]=useState(JSON.parse(sessionStorage.getItem("user")))
  return (
    <div>
      <AppProvider currentUser={currentUser}>

     
      <BrowserRouter>
     <Header/>  
        <Routes>
          <Route element={<Home></Home>} path="home" />

          <Route element={<Signup></Signup>} path="signup" />
          <Route element={<Login />} path="login" />
          <Route element={<UserBrowser />} path="userbrowser" />
          {/* <Route element={<AddModel></AddModel>} path="addmodel" /> */}
          {/* <Route element={<ModelBrowser />} path="modelbrowser" /> */}
          <Route
            element={
              <Authorisor>
             <ModelBrowser/>
              </Authorisor>
            }
            path="/modelbrowser"
          />
          <Route
            element={
              <Authorisor>
             <AddModel></AddModel>
              </Authorisor>
            }
            path="/addmodel"
          />
          <Route element={<ViewModel />} path="viewer/:id" />
          <Route element={<Navigate to="/home" />} path="/" />
        </Routes>
      </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
