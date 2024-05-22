/* eslint-disable react/prop-types */
import { Button, Modal, Typography } from "@mui/material";
import { FormatDate } from "../shared/DateServices";
import { useState } from "react";
import { useCookies } from "react-cookie";
import DutyCardModal from "./DutyCardModal";
import api from "../Api";


const DutySwapRequestCardModal = (props) => {
    const { open, handleClose, swap_request, handleInfoAcceptedOpen, handleInfoDeclinedOpen } = props
    const [cookies] = useCookies(['csrftoken'])

    const [yourDutyOpen, setYourDutyOpen] = useState(false)
    const handleYourDutyOpen = () => setYourDutyOpen(true)
    const handleYourDutyClose = () => setYourDutyOpen(false)

    const [theirDutyOpen, setTheirDutyOpen] = useState(false)
    const handleTheirDutyOpen = () => setTheirDutyOpen(true)
    const handleTheirDutyClose = () => setTheirDutyOpen(false)

    const handleAcceptRequest = () => {
        api.post(`v1/duties/swap-duties/${swap_request.pk}/accept_swap_duties_request/`, {}, {
            headers: {
                "X-CSRFToken": cookies['csrftoken']
            }
        }).then(() => {
            handleClose()
            handleInfoAcceptedOpen()
        })
    }

    const handleDeclineRequest = () => {
        api.post(`v1/duties/swap-duties/${swap_request.pk}/decline_swap_duties_request/`, {}, {
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
                        {swap_request.first_user.surname} {swap_request.first_user.name} {swap_request.first_user.room}

                    </Typography>
                    <Typography>
                        предлагает вам обменяться дежурствами:
                    </Typography>
                    <Typography>
                        Ваше
                        <Button onClick={handleYourDutyOpen}>
                            {FormatDate(swap_request.second_duty.date, false)}
                        </Button>
                        на его
                        <Button onClick={handleTheirDutyOpen}>
                            {FormatDate(swap_request.first_duty.date, false)}
                        </Button>
                    </Typography>
                    {swap_request.accepted | swap_request.declined | swap_request.canceled ? 
                    <></>
                    : <div className="flex justify-evenly pt-2">
                    <Button variant="contained" onClick={handleAcceptRequest}>
                        Принять
                    </Button>
                    <Button variant="contained" color="error" onClick={handleDeclineRequest}>
                        Отклонить
                    </Button>
                </div>}
                    
                </div>
            </Modal>
            <DutyCardModal open={yourDutyOpen} handleClose={handleYourDutyClose} duty={swap_request.second_duty} />
            <DutyCardModal open={theirDutyOpen} handleClose={handleTheirDutyClose} duty={swap_request.first_duty} />
        </>
    )
}

export default DutySwapRequestCardModal