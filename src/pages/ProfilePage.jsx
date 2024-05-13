import { useEffect, useState } from "react"
import api from "../Api"
import Loader from '../components/Loader.jsx'
import { Button, Typography } from "@mui/material"
import LogOutModal from "../components/LogOutModal.jsx"


const ProfilePage = () => {
    const [userData, setUserData] = useState(null)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchProfile = () => {
        api.get('v1/users/users-views/me/').then((response) => {
            setUserData(response.data)
        })
    }

    useEffect(() => {
        fetchProfile()
    }, [])


    return (
        <>
        {userData ? 
            (<div className="flex flex-col justify-center items-center" style={{ height: '80vh' }}>
                <div className="p-4">
                    <Typography variant="h6" gutterBottom>
                        Имя пользователя: {userData.username}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Фамилия: {userData.surname}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Имя: {userData.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Отчество: {userData.second_name}
                    </Typography>
                    <div className="mt-4">
                        <Button onClick={handleOpen} variant="contained" color="primary" fullWidth>
                            Выйти
                        </Button>
                    </div>
                </div>
                <LogOutModal open={open} handleClose={handleClose} />
            </div>)
            :
            <Loader />
}
            {/* {userData ? (<div>
            <p>{userData.username}</p>
            <p>{userData.surname}</p>
            <p>{userData.name}</p>
            <p>{userData.second_name}</p>
            <Button onClick={handleOpen}>Выйти</Button>
            <LogOutModal open={open} handleClose={handleClose} />
            </div>
            ) : <Loader /> } */}
        </>
    )
}

export default ProfilePage