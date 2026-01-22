import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./app.css";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

import Landing from "./pages/Landing";
import City from "./pages/City";
import Area from "./pages/Area";
import Service from "./pages/Service";
import Vendor from "./pages/Vendor";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },

      {
        element: <PublicRoute />,
        children: [
          { path: "/login", element: <Login /> },
          { path: "/signup", element: <Signup /> },
        ],
      },

      {
        element: <ProtectedRoute />,
        children: [
          { path: "/discover", element: <City /> },
          { path: "/:city", element: <Area /> },
          { path: "/:city/:area", element: <Service /> },
          { path: "/:city/:area/:service", element: <Vendor /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </AuthProvider>
  </React.StrictMode>
);
