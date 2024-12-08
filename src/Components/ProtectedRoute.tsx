import { Navigate } from "react-router-dom"

const ProtectedRoute = ({element}: { element: JSX.Element }) => {
  // TODO: Implement check authToken form local storage
  // const authToken = localStorage.getItem('authToken')
  const authToken = "alksdjf"
  // const authToken = null

  if (!authToken) return <Navigate to="/login" />

  return element
}

export default ProtectedRoute
