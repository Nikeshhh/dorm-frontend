import { Navigate } from "react-router-dom"
import api from "../Api"
import Layout from "../pages/Layout"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"


const isAuthenticated = async () => {
    let isAuth = false
    await api.get('v1/auth/is_authenticated/').then(response => {
        isAuth = response.data.is_authenticated
    })
    return isAuth
}

const PrivateRoute = () => {
    const [isAuth, setIsAuth] = useState(null)

    useEffect(() => {
        isAuthenticated().then(auth => {
            setIsAuth(auth)
        })
    }, [])

    return isAuth === null ? <Loader /> : isAuth ? (
        <Layout />
    ) : (
        <Navigate to={"/login"} />
    )
    
}

export { PrivateRoute }


const AuthRedirect = () => {
    const [isAuth, setIsAuth] = useState(null)

    useEffect(() => {
        isAuthenticated().then(auth => {
            setIsAuth(auth)
        })
    }, [])

    return isAuth === null ? <Loader /> : !isAuth ? (
        <Navigate to={"/login"} />
    ) : (
        <Navigate to={"/home"} />
    )
    
}

export { AuthRedirect }