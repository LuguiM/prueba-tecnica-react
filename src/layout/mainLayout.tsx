import { Outlet } from "react-router"
export const mainLayout = () => {
  return (
    <div className="container-main">
        <Outlet />
    </div>
  )
}
