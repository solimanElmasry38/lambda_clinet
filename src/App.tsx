import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";

import * as React from "react";
import PrivateRoutes from "./utils/protected_routes";
import { Spinner } from "./components/Spinner/Spinner";
import { useCart } from "./context/cartCtx";
import { Cart } from "./components/Cart/Cart";
import Product from "./pages/product/product";

const VerifyEmail = React.lazy(
  () => import("./pages/auth/verifyEmail/verifyEmail")
);
const Signup = React.lazy(() => import("./pages/auth/Singup/signup"));
const Login = React.lazy(() => import("./pages/auth/Login/login"));
const Home = React.lazy(() => import("./pages/home/home"));

export const App = () => {

  const {
   
    removeFromCart,
    

    cartItems,
  } = useCart();


  
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Spinner />}>
                <Home />
              </React.Suspense>
            }
          />
        </Route>


        <Route
            path="cart"
            element={
              <React.Suspense fallback={<Spinner />}>
               <Cart
  
  removeProduct={removeFromCart}
  cartItems={cartItems}
/>
              </React.Suspense>
            }
          />
        
        <Route
            path="products/:prod_id"
            element={
              <React.Suspense fallback={<Spinner />}>
     <Product/>
              </React.Suspense>
            }
          />

        <Route
          path="/login"
          element={
            <React.Suspense fallback={<Spinner />}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <React.Suspense fallback={<Spinner />}>
              <Signup />
            </React.Suspense>
          }
        />
        <Route
          path="/verify"
          element={
            <React.Suspense fallback={<Spinner />}>
              <VerifyEmail />
            </React.Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};
