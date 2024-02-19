import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Error404 from './components/Error404';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Admission from './components/student/Admission';
import CreateGroup from './components/groups/CreateGroup';
import GroupTable from './components/groups/GroupsData';
import Sidebar3 from './components/SideMenu3';
import ViewGroup from './components/groups/ViewGroup';
import EditGroup from './components/groups/EditGroup';
import AllSessions from './components/sessions/AllSessions';



const App = () => {

  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="font-mono text-center">
      <NavBar onMenuButtonClick={toggleSidebar} />
      <div className='flex flex-row'>
        <Sidebar3 className={isSidebarVisible ? 'sidebar-open' : 'sidebar-closed'} />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/student/admission',
        element: <Admission />
      },
      {
        path: '/groups',
        element: <GroupTable />
      },
      {
        path: '/group/create-group',
        element: <CreateGroup />
      },
      {
        path: '/group/view-group/:group_id',
        element: <ViewGroup />
      },
      {
        path: '/group/edit-group/:group_id',
        element: <EditGroup />
      },
      {
        path: '/sessions',
        element: <AllSessions />
      }
    ]
  }
]);

root.render(<RouterProvider router={appRouter} />);




///////////////////////////////////////////////////////////
