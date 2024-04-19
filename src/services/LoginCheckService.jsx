import { Navigate } from "react-router-dom"
import api from "../Api"
import Layout from "../pages/Layout"


const isAuthenticated = async () => {
    let isAuth = false
    await api.get('v1/auth/is_authenticated/').then(response => {
        isAuth = response.data.is_authenticated
    })
    return isAuth
}

const PrivateRoute = () => {
    const isAuth = isAuthenticated()

    return isAuth ? (
        <Layout />
    ) : (
        <Navigate to={"/login"} />
    )
}

export { PrivateRoute }


const AuthRedirect = () => {
    const isAuth = isAuthenticated()

    return !isAuth ? (
        <Navigate to={"/login"} />
    ) : (
        <Navigate to={"/home"} />
    )
}

export { AuthRedirect }