import { Outlet } from "react-router"
import { Navbar } from "./sections/Navbar"
export const mainLayout = () => {
  return (
    <>
    <Navbar />
    <div className="container-main">
        <Outlet />
    </div>
    </>
  )
}
