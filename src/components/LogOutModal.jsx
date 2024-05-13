/* eslint-disable react/prop-types */
import { Button, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import api from "../Api";


const LogOutModal = (props) => {
    const { open, handleClose } = props
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['csrftoken'])

    const LogOut = () => {
        api.post('/v1/auth/logout/', {}, {
            headers: {
                "X-CSRFToken": cookies['csrftoken']
            }
        }).then(() => {
            removeCookie('csrftoken')
            navigate('/login')
        })
    }

    return (
        <>
            <Modal
                className="flex justify-center items-center"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="p-4 rounded text-center"
                    style={{ backgroundColor: "#E6E9E1" }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Вы уверены?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Вы действительно хотите выйти из аккаунта?
                    </Typography>
                    <div className="flex justify-evenly pt-2">
                        <Button color="error" variant="contained" onClick={LogOut}>
                            Да
                        </Button>
                        <Button variant="contained" onClick={handleClose}>
                            Нет
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default LogOutModal