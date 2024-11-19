import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Signin from "./components/SignIn/Signin.jsx";
import Cart from "./components/Cart/Cart.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const appRoutes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signin", element: <Signin /> },
  { path: "/cart", element: <Cart /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoutes} />
  </StrictMode>
);
