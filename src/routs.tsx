import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Login } from "./pages/auth/Login/login";
import { Signup } from "./pages/auth/Singup/signup";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import { VerifyEmail } from "./pages/auth/verifyEmail/verifyEmail";
import { userDataContx } from "./context/userData.ts";
import { useState } from "react";

export const Routs = () => {  
  const [usrData, setusrData] = useState({});

  return (
    <>
      {/* <userDataContx.Provider value={{ usrData, setusrData }}> */}
      <Header />
      <Routes>
        <Route
          index
          element={
            <userDataContx.Provider value={{ usrData, setusrData }}>
              <Home />
            </userDataContx.Provider>
          }
        />
        <Route
          path="/login"
          element={
            <userDataContx.Provider value={{ usrData, setusrData }}>
              <Login />
            </userDataContx.Provider>
          }
        />
        <Route
          path="/signup"
          element={
            <userDataContx.Provider value={{ usrData, setusrData }}>
              <Signup />
            </userDataContx.Provider>
          }
        />
        <Route
          path="/verify"
          element={
            <userDataContx.Provider value={{ usrData, setusrData }}>
              <VerifyEmail />
            </userDataContx.Provider>
          }
        />
      </Routes>
      <Footer />
      {/* </userDataContx.Provider> */}
    </>
  );
};
