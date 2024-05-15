import { AppBar } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from "react-router-dom";


const HeaderBar = () => {
    const navigate = useNavigate()

    return (
        <>
            <AppBar
                className="fixed inset-x-0 top-0 grid-cols-4"
                style={{
                    height: "10vh",
                    display: 'grid',

                }}
            >
                <div
                    className="col-start-4"
                    style={{ width: '100%', height: '10vh' }}
                    onClick={() => { navigate('/notifications') }}
                >
                    <NotificationsIcon style={{ width: '100%', height: '100%' }} />
                </div>
            </AppBar>
        </>
    )
}

export default HeaderBar