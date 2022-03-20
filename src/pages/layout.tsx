import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"
import AppBar from "../components/appbar"


const Layout = () => {
  return (
    <div className="App">
      <AppBar />
      <Container maxWidth="xl" sx={{my: 2}}>
        <Outlet />
      </Container>
      

    </div>
  )
}

export default Layout
