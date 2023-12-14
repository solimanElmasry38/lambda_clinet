import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Login } from "./pages/auth/Login/login";
import { Signup } from "./pages/auth/Singup/signup";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      <Route path="/login"  element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
};
