import { RouteObject } from "react-router-dom"
import Login from "./pages/Login"
import Layout from "./layouts/Layout"
import ProtectedRoute from "./Components/ProtectedRoute"
import Users from "./pages/Users"
import Chargers from "./pages/Chargers"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <ProtectedRoute element={<Layout />} />,
    children: [
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'charges',
        element: <Chargers />
      },
      {
        path: 'settings',
        element: <h2>settings</h2>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]
