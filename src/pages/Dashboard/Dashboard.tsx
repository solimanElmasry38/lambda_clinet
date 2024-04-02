import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import DashboardUsers from './DashboardUsers';
import DashboardProducts from './DashboardProducts';
import DashboardOffers from './DashboardOffers';
import DashboardCategorys from './DashboardCategorys';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from '../../components/Spinner/Spinner';
function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState('users');
  const navegate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/dashboard/users':
        setSelectedComponent('users');
        break;
      case '/dashboard/products':
        setSelectedComponent('products');
        break;
      case '/dashboard/offers':
        setSelectedComponent('offers');
        break;
      case '/dashboard/categories':
        setSelectedComponent('categories');
        break;
      default:
        setSelectedComponent('');
        break;
    }
  }, [location]);
  return (
    <section className="dashboardSec">
      <aside className="dashboardSide">
        <ul>
          <li
            className={selectedComponent === 'users' ? 'active' : ''}
            onClick={() => {
              setSelectedComponent('users');

              navegate('/dashboard/users');
            }}>
            users
          </li>

          <li
            className={selectedComponent === 'products' ? 'active' : ''}
            onClick={() => {
              setSelectedComponent('products');

              navegate('/dashboard/products');
            }}>
            products
          </li>
          <li
            className={selectedComponent === 'offers' ? 'active' : ''}
            onClick={() => {
              setSelectedComponent('offers');
              navegate('/dashboard/offers');
            }}>
            offers
          </li>
          <li
            className={selectedComponent === 'categories' ? 'active' : ''}
            onClick={() => {
              setSelectedComponent('categories');
              navegate('/dashboard/categories');
            }}>
            categories
          </li>
        </ul>
      </aside>
      <main className="dashboardMain">
        <Routes>
          <Route
            path="/users"
            element={
              <React.Suspense fallback={<Spinner />}>
                {/* Pass props to Cart component */}
                <DashboardUsers />
              </React.Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <React.Suspense fallback={<Spinner />}>
                {/* Pass props to Cart component */}
                <DashboardProducts />
              </React.Suspense>
            }
          />
          <Route
            path="/offers"
            element={
              <React.Suspense fallback={<Spinner />}>
                <DashboardOffers />
              </React.Suspense>
            }
          />
          <Route
            path="/categories"
            element={
              <React.Suspense fallback={<Spinner />}>
                <DashboardCategorys />
              </React.Suspense>
            }
          />
        </Routes>
      </main>
    </section>
    // </Router>
  );
}

export default Dashboard;
