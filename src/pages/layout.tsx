import { Typography } from "@mui/material"
import { Outlet } from "react-router-dom"


const Layout = () => {
  
  return (
    <div>
      <Typography>Hola</Typography>
      <Outlet />
    </div>
  )
}

export default Layout
