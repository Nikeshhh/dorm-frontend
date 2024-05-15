/* eslint-disable react/prop-types */
import { Button, Modal, Typography } from "@mui/material";
import { FormatDate } from "../shared/DateServices";
import { useState } from "react";
import { useCookies } from "react-cookie";
import DutyCardModal from "./DutyCardModal";
import api from "../Api";


const PeopleSwapRequestCardModal = (props) => {
    const { open, handleClose, swap_request, handleInfoAcceptedOpen, handleInfoDeclinedOpen } = props
    const [cookies] = useCookies(['csrftoken'])

    const [dutyOpen, setDutyOpen] = useState(false)
    const handleDutyOpen = () => setDutyOpen(true)
    const handleDutyClose = () => setDutyOpen(false)

    const handleAcceptRequest = () => {
        api.post(`v1/duties/swap-people/${swap_request.pk}/accept_swap_people_request/`, {}, {
            headers: {
                "X-CSRFToken": cookies['csrftoken']
            }
        }).then(() => {
            handleClose()
            handleInfoAcceptedOpen()
        })
    }

    const handleDeclineRequest = () => {
        api.post(`v1/duties/swap-people/${swap_request.pk}/decline_swap_people_request/`, {}, {
            headers: {
                "X-CSRFToken": cookies['csrftoken']
            }
        }).then(() => {
            handleClose()
            handleInfoDeclinedOpen()
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
                    style={{ backgroundColor: "#E6E9E1", maxWidth: "90vw" }}
                >
                    <Typography id="modal-modal-title">
                        {swap_request.current_user.surname} {swap_request.current_user.name} {swap_request.current_user.room}

                    </Typography>
                    <Typography>
                        предлагает вам заменить его на дежурстве
                        <Button onClick={handleDutyOpen}>
                            {FormatDate(swap_request.duty.date, false)}
                        </Button>
                    </Typography>
                    <div className="flex justify-evenly pt-2">
                        <Button variant="contained" onClick={handleAcceptRequest}>
                            Принять
                        </Button>
                        <Button variant="contained" color="error" onClick={handleDeclineRequest}>
                            Отклонить
                        </Button>
                    </div>
                </div>
            </Modal>
            <DutyCardModal open={dutyOpen} handleClose={handleDutyClose} duty={swap_request.duty} />
        </>
    )
}

export default PeopleSwapRequestCardModal