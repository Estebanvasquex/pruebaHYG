import {} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./componets/pages/Login";
import Error404 from "./componets/pages/Error404";
import CreateUser from "./componets/pages/CreateUser";
import UpdateUser from "./componets/pages/UpdateUser";
import DetailUser from "./componets/pages/DetailUser";
import NavBarContainer from "./componets/layout/navBar/NavBarContainer";
import FooterContainer from "./componets/layout/footer/FooterContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NavBarContainer />}>
            <Route element={<FooterContainer />}>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<Error404 />} />
              <Route path="/login" element={<Login />} />
              <Route path="/createUser" element={<CreateUser />} />
              <Route path="/updateUser/:id" element={<UpdateUser />} />
              <Route path="/detailUser/:id" element={<DetailUser />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
