import { Outlet } from "react-router-dom"
import AppBar from "../components/appbar"


const Layout = () => {
  return (
    <div className="App">
      <AppBar />
      <Outlet />
    </div>
  )
}

export default Layout
