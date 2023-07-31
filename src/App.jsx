
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./componets/pages/Login";
import Error404 from "./componets/commonts/error404/Error404";
import CreateUser from "./componets/commonts/createUser/CreateUser";

import DetailUser from "./componets/pages/DetailUser";
import NavBarContainer from "./componets/layout/navBar/NavBarContainer";
import FooterContainer from "./componets/layout/footer/FooterContainer";
import UsersContainer from './componets/commonts/users/UsersContainer';
import UpdateUserContainer from './componets/commonts/updateUser/UpdateUserContainer';
import CreateUserContainer from './componets/commonts/createUser/CreateUserContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<NavBarContainer />}>
            <Route element={<FooterContainer />}>
              
              <Route path="*" element={<Error404/>} />
              
              <Route path="/createUser" element={<CreateUserContainer/>} />
              <Route path="/updateUser/:id" element={<UpdateUserContainer/>} />
              <Route path="/detailUser/:id" element={<DetailUser />} />
              <Route path="/users" element={<UsersContainer/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
