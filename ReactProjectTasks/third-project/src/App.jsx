import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Parent from "./components/Parent/Parent";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import UseEffectComp from "./components/UseEffectComp/UseEffectComp";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./components/Cart/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          index: true,
          element: <Parent></Parent>,
        },
        { path: "/About", element: <About></About> },
        { path: "/UseEffectCode", element: <UseEffectComp></UseEffectComp> },
        { path: "/Home", element: <Home></Home> },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
