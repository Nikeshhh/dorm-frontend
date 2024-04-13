import { Button, CircularProgress, TextField, Typography } from "@mui/material"
import axios from 'axios'
import { useState } from "react"

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submitLogin = async () => {
        setIsLoading(true)
        console.log(username, password)
        const login_data = {
            username: username,
            password: password
        }
        await axios.post('http://localhost:8000/api/v1/auth/login/', login_data, { withCredentials: true }).then((response) => {
            console.log(response)
        }).catch(() => { })
        setIsLoading(false)
    }

    return (
        <div className="mx-10 my-auto grid grid-cols-4 grid-rows-5 bg-white gap-y-2 gap-x-4">
            <Typography
                className="flex col-span-full justify-center my-auto"
                fontSize="32px"
            >
                ВХОД
            </Typography>
            <TextField
                className="col-span-4"
                id="username"
                label="Имя пользователя"
                variant="outlined"
                required
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                className="col-span-4"
                id="password"
                label="Пароль"
                variant="outlined"
                required
                onChange={(e) => setPassword(e.target.value)}
            />
            <Typography
                className="col-span-2 content-center text-center"
                fontSize="16px"
            >
                Не можете войти?
            </Typography>
            <Typography 
                className="col-span-2 content-center text-center"
                fontSize="16px"
            >
                Забыли пароль?
            </Typography>
            <Button
                className="col-start-2 col-end-4"
                variant="contained"
                onClick={submitLogin}
            >
                Войти
            </Button>
            {isLoading ? <CircularProgress /> : <p></p>}
        </div>
    )
}

export default LoginForm