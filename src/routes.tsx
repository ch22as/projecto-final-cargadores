import { RouteObject } from "react-router-dom"
import Login from "./pages/Login"
import Layout from "./layouts/Layout"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: 'users',
        element: <h2>users</h2>
      },
      {
        path: 'charges',
        element: <h2>charges</h2>
      },
      {
        path: 'settings',
        element: <h2>settings</h2>
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]
