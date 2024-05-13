import { useEffect, useState } from "react"
import api from "../Api"
import Loader from '../components/Loader.jsx'
import { Button } from "@mui/material"
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
            {userData ? (<div>
            <p>{userData.username}</p>
            <p>{userData.surname}</p>
            <p>{userData.name}</p>
            <p>{userData.second_name}</p>
            <Button onClick={handleOpen}>Выйти</Button>
            <LogOutModal open={open} handleClose={handleClose} />
            </div>
            ) : <Loader /> }
        </>
    )
}

export default ProfilePage