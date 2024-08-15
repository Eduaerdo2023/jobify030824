import { Outlet } from "react-router-dom"
import Admin from '../pages/Admin'

const HomeLayout = () => {
  return (
    <>
      <Outlet />
      <Admin />
    </>
  )
}

export default HomeLayout
