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
                <div className="p-4" style={{ border: '4px solid #AAB', borderRadius: '6px'}}>
                    <Typography className="text-center" variant="h6" gutterBottom>
                        Имя пользователя:
                    </Typography>
                    <Typography className="text-center" variant="h6" gutterBottom>
                        {userData.username}
                    </Typography>
                    <Typography className="text-center" variant="h6" gutterBottom>
                        ФИО:
                    </Typography>
                    <Typography className="text-center" variant="h6" gutterBottom>
                        {userData.surname}
                    </Typography>
                    <Typography className="text-center" variant="h6" gutterBottom>
                        {userData.name}
                    </Typography>
                    <Typography className="text-center" variant="h6" gutterBottom>
                        {userData.second_name}
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
        </>
    )
}

export default ProfilePage