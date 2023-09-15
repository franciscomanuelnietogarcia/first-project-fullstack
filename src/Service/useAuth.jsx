import { useContext } from "react"
import AuthContext from "../components/PrivatRoute/AuthProvider"

function useAuth() {
  return (
    useContext(AuthContext)
  )
}

export default useAuth
