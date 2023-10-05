import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home.jsx';
import Header from './components/header.jsx';
import About from './components/About.jsx';
import Contact from './components/contact.jsx';
import User from './components/User.jsx';
import Login from './components/Login.jsx';
import Getstarted from './components/Getstarted.jsx';
import Github, { githubInfoLoader } from './components/Github.jsx';

import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} />
      <Route path='getstarted' element={<Getstarted />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
// index.js or App.js




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])




