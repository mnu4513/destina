import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Error404 from './components/Error404';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Admission from './components/Addmission/Admission';
import GroupTable from './components/groups/GroupsData';
import Sidebar3 from './components/SideMenu3';
import AllSessions from './components/sessions/AllSessions';
import SourceOfContact from './components/sourceOfContact/SourceOfContact';
import VisitorPurpose from './components/visitorPurpose/VisitorPurpose';
import FormGroup from './components/fromGroup/FromGroup';
import Designation from './components/designation/Designation';
import StudentHouse from './components/studentHouse/StudentHouse';
import LeaveType from './components/leaveType/LeaveType';
import FeeDiscount from './components/feeDiscount/FeeDiscount';
import Section from './components/section/Section';
import ClassData from './components/classData/ClassData';
import Role from './components/role/Role';
import StudentCategory from './components/studentCategory/StudentCategory';
import SMS from './components/sms/SMS';
import TimeZone from './components/timezone/TimeZone';
import Currency from './components/currency/Currency';
import PaymentGateway from './components/paymentGateway/PaymentGateway';
import BoardClass from './components/boardClass/BoardClasses';
import Courses from './components/courses/Courses';
import CoursesType from './components/courseType/CourseType';
import BoardUniversity from './components/boardUniversity/BoardUnversity';
import AdmissionEnquery from './components/frontOffice/AdmissionEnquery';
import VisitorBook from './components/frontOffice/VisitorBook';
import Complaint from './components/frontOffice/Complaint';
import PhoneCallLog from './components/frontOffice/PhoneCallLog';
import PostalDispatch from './components/frontOffice/PostalDispatch';
import PostalReceive from './components/frontOffice/PostalReceive';


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
        path: '/sessions',
        element: <AllSessions />
      },
      {
        path: '/source-of-contact',
        element: <SourceOfContact />
      },
      {
        path: '/visitor-purpose',
        element: <VisitorPurpose />
      },
      {
        path: '/form-group',
        element: <FormGroup />
      },
      {
        path: '/designation',
        element: <Designation />
      },
      {
        path: '/student-house',
        element: <StudentHouse />
      },
      {
        path: '/leave-type',
        element: <LeaveType />
      },
      {
        path: '/fee-discount',
        element: <FeeDiscount />
      },
      {
        path: '/section',
        element: <Section />
      },
      {
        path: '/class',
        element: <ClassData />
      },
      {
        path: '/role',
        element: <Role />
      },
      {
        path: '/student-category',
        element: <StudentCategory />
      },
      {
        path: '/sms',
        element: <SMS />
      },
      {
        path: '/timezone',
        element: <TimeZone />
      },
      {
        path: '/currency',
        element: <Currency />
      },
      {
        path: '/payment-gateway',
        element: <PaymentGateway />
      },
      {
        path: '/board-class',
        element: <BoardClass />
      },
      {
        path: '/courses',
        element: <Courses />
      },
      {
        path: '/courses-type',
        element: <CoursesType />
      },
      {
        path: '/board_uni',
        element: <BoardUniversity />
      },
      {
        path: '/admission-enq',
        element: <AdmissionEnquery />
      },
      {
        path: '/visitor-book',
        element: <VisitorBook />
      },
      {
        path: '/complaint',
        element: <Complaint />
      },
      {
        path: '/phone-call-log',
        element: <PhoneCallLog />
      },
      {
        path: '/postal-dispatch',
        element: <PostalDispatch />
      },
      {
        path: '/postal-receive',
        element: <PostalReceive />
      }
    ]
  }
]);

root.render(<RouterProvider router={appRouter} />);




///////////////////////////////////////////////////////////
