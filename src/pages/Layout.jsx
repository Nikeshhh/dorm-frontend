import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import HeaderBar from "../components/HeaderBar"



const Layout = () => {
    return (
        <>
            <HeaderBar />
            <div
                className="w-screen content-center"
                style={{
                    paddingBottom: "10vh",
                    paddingTop: "10vh"
                }}
            >
                <Outlet />
            </div>
            <NavBar />
        </>
    )
}

export default Layout