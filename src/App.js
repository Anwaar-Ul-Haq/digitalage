import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Features from "./pages/Features";

const App = () => {
  const router = createBrowserRouter([
    {
      // element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/investors",
          element: <Investors />,
        },
        {
          path: "/features",
          element: <Features />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
