import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/footer';
import { Header } from './components/Header/header';
import * as React from 'react';
import PrivateRoutes from './utils/protected_routes';
import { Spinner } from './components/Spinner/Spinner';

import { Cart } from './pages/Cart/Cart';
import Product from './pages/product/product';
import Search from './pages/Search/Search';
import { SubHeader } from './components/SubHeader/SubHeader';

const VerifyEmail = React.lazy(() => import('./pages/auth/verifyEmail/verifyEmail'));
const Signup = React.lazy(() => import('./pages/auth/Singup/signup'));
const Login = React.lazy(() => import('./pages/auth/Login/login'));
const Home = React.lazy(() => import('./pages/home/home'));
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));

export const App = () => {
  const isDashboardRoute = location.pathname.includes('/dashboard');

  return (
    <>
          <Header />

      {!isDashboardRoute && (
        <>
          <SubHeader />
        </>
      )}

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
          path="dashboard"
          element={
            <React.Suspense fallback={<Spinner />}>
              {/* Pass props to Cart component */}
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <React.Suspense fallback={<Spinner />}>
              {/* Pass props to Cart component */}
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="search"
          element={
            <React.Suspense fallback={<Spinner />}>
              <Search />
            </React.Suspense>
          }
        />
        <Route
          path="products/:prod_id"
          element={
            <React.Suspense fallback={<Spinner />}>
              <Product />
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
      {!isDashboardRoute && (
        <>
                <Footer />

        </>
      )}
    </>
  );
};
