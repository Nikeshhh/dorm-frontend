/* eslint-disable react/prop-types */
import { Button, Modal, Typography } from "@mui/material";
import { FormatDate } from "../shared/DateServices";
import { useState } from "react";
import api from "../Api";
import { useCookies } from "react-cookie";


const DutySwapCardModal = (props) => {
    const { open, handleClose, duty, parent_duty_pk, handleInfoOpen } = props
    const date = FormatDate(duty.date, false)
    const [chosenPupilPk, setChosenPupilPk] = useState(duty.people[0].pk)
    const [cookies] = useCookies(['csrftoken'])

    const handleSendRequest = () => {
        const data = {
            initiator_duty_pk: parent_duty_pk,
            to_swap_duty_pk: duty.pk,
            to_swap_resident_pk: chosenPupilPk
        }
        api.post('v1/duties/swap-duties/create_swap_duties_request/', data, {headers: {
            "X-CSRFToken": cookies['csrftoken']
        }})
        .then(() => {
            handleClose()
            handleInfoOpen()
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Дежурство {date}
                    </Typography>
                    <Typography>
                        Ответственные:
                    </Typography>
                    <div>
                        <select onChange={(e) => setChosenPupilPk(e.target.value)}>
                            {duty.people.map((pupil) => {
                                return (
                                    <option value={pupil.pk} key={pupil.pk}>
                                        {pupil.surname} {pupil.name} {pupil.second_name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <Button onClick={handleSendRequest} variant="contained">
                        Обмен
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default DutySwapCardModal