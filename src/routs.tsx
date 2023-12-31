import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Login } from "./pages/auth/Login/login";
import { Signup } from "./pages/auth/Singup/signup";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import { VerifyEmail } from "./pages/auth/verifyEmail/verifyEmail";

export const Routs = () => {  
 

  return (
    <>
     
      <Header /> 
      <Routes>
        <Route
          index
          element={
           
              <Home />
           
          }
        />
        <Route
          path="/login"
          element={
           
              <Login />
           
          }
        />
        <Route
          path="/signup"
          element={
           
              <Signup />
           
          }
        />
        <Route
          path="/verify"
          element={
           
              <VerifyEmail />
           
          }
        />
      </Routes>
      <Footer />
  
    </>
  );
};
