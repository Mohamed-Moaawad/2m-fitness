import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';
import Dashboard from './dashboard/Dashboard';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Details from './pages/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>errorElement</h1>,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

