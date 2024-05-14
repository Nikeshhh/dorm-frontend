/* eslint-disable react/prop-types */
import { Button, Modal, Typography } from "@mui/material"
import api from '../Api'
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"


const SwapResidentModal = (props) => {
    const { open, handleClose, handleInfoOpen, duty_pk } = props
    const [residentsList, setResidentsList] = useState(null)
    const [chosenUserPk, setChosenUserPk] = useState(null)
    const [cookies] = useCookies(['csrftoken'])


    const fetchResidents = () => {
        api.get('v1/users/users-views/list_residents/').then((response) => {
            setResidentsList(response.data)
        })
    }

    const handleSendRequest = () => {
        const data = {
            to_swap_duty_pk: duty_pk,
            to_swap_user_pk: chosenUserPk
        }
        api.post('v1/duties/swap-people/create_swap_people_request/', data, {headers: {
            "X-CSRFToken": cookies['csrftoken']
        }}).then(() => {
            handleClose()
            handleInfoOpen()
        })
    }

    useEffect(() => {
        console.log(chosenUserPk)
    }, [chosenUserPk])

    useEffect(() => {
        fetchResidents()
    }, [])


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
                    style={{ backgroundColor: "#E6E9E1", maxWidth: "90vw" }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Выберите замену
                    </Typography>
                    <select onChange={(e) => {setChosenUserPk(e.target.value)}}>
                        {residentsList ? residentsList?.map((resident) => {
                            return (
                                <option key={resident.pk} value={resident.pk}>{resident.surname} {resident.name}</option>
                            )
                        }) : <option></option>}
                    </select>
                    <Typography>
                    <Button onClick={handleSendRequest} variant="contained">Отправить</Button>
                    </Typography>
                </div>
            </Modal>
        </>
    )
}

export default SwapResidentModal