import React, { useState } from 'react'
import "./Dashboard.scss"
import DashboardUsers from './DashboardUsers';
import DashboardProducts from './DashboardProducts';
import DashboardOffers from './DashboardOffers';
import DashboardCategorys from './DashboardCategorys';
function Dashboard() {
    const [selectedComponent, setSelectedComponent] = useState('users');
    const renderComponent = () => {

        switch (selectedComponent) {
          case 'users':
            return <DashboardUsers />;
          case 'products':
            return <DashboardProducts />;
          case 'offers':
            return <DashboardOffers />;
          case 'categories':
            return <DashboardCategorys />;
          default: 
            return null;
        }
      };
  return (
  <section className="dashboardSec">
    <aside className="dashboardSide">
        <ul>
        <li className={selectedComponent === 'users' ? 'active' : ''} onClick={() => setSelectedComponent('users')}>users</li>
          <li className={selectedComponent === 'products' ? 'active' : ''} onClick={() => setSelectedComponent('products')}>products</li>
          <li className={selectedComponent === 'offers' ? 'active' : ''} onClick={() => setSelectedComponent('offers')}>offers</li>
          <li className={selectedComponent === 'categories' ? 'active' : ''} onClick={() => setSelectedComponent('categories')}>categories</li>
        </ul>
    </aside>
    <main className="dashboardMain">
        {renderComponent()}
    </main>
  </section>

  
  )
}

export default Dashboard
