import { useEffect, useState } from 'react'
import api from '../Api'
import LoginForm from '../components/LoginForm'
import { useNavigate } from "react-router-dom"
import Loader from '../components/Loader'

const LoginPage = () => {
    const [form, setForm] = useState(null)
    const navigate = useNavigate()

    const checkAuthenticated = () => {
        setForm(
            <div className="grid">
            <Loader/>
            </div>
    )
        api.get('v1/auth/is_authenticated/').then( response => {
            if (response.data.is_authenticated)
                navigate('laundry/')
            else 
                setForm(<LoginForm />)
        }).catch(() => {})
    }

    useEffect( () => {
        checkAuthenticated()
    }, [])

    return (
        <>
            {form}
        </>
    )
}

export default LoginPage