import { Button, TextField } from "@mui/material"
import axios from 'axios'
import { useState } from "react"

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitLogin = () => {
        console.log(username, password)
        const login_data = {
            username: username,
            password: password
        }
        axios.post('http://localhost:8000/api/v1/auth/login/', login_data, { withCredentials: true }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className="mx-auto my-auto grid grid-cols-1 grid-rows-3 bg-white">
        <TextField id="username" label="Username" variant="outlined" required onChange={(e) => setUsername(e.target.value)}/>
        <TextField id="password" label="Password" variant="outlined" required onChange={(e) => setPassword(e.target.value)}/>
        <Button variant="contained" onClick={submitLogin}>Submit</Button>
        </div>
    )
}

export default LoginForm