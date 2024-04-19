import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"



const Layout = () => {
    return (
        <>
            <div
                className="w-screen overflow-scroll"
                style={{
                    height: "90vh"
                }}
            >
                <Outlet />
            </div>
            <NavBar />
        </>
    )
}

export default Layout