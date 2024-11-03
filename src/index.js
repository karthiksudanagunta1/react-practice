import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Products from './component/Product';
import About from './component/About';
import Error from './component/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './component/Contact';
import Restaurant from './component/Restaurant';
import { lazy, Suspense } from 'react';
import UserContext from './utils/UserContext';

const Grocers = lazy(() => import("./component/Grocers"));

// Main App Component
const App = () => {
  const user=useContext(UserContext)

  const [name,setName]=useState("karthik");
  return (
    <>
     <UserContext.Provider value={{name,setName} }>
      <Header />
      <Outlet />
      </UserContext.Provider>
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocers",
        element: (
          <Suspense fallback={<h1>...Loading</h1>}>
            <Grocers />
          </Suspense>
        )
      },
      {
        path: "/restaurants/:resid",
        element: <Restaurant />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute} />);
