/* eslint-disable react/prop-types */
import { Button, Modal, Typography } from "@mui/material";
import { FormatDate } from "../shared/DateServices";
import SwapResidentModal from "./SwapResidentModal";
import { useState } from "react";
import InfoModal from "./InfoModal";
import { useNavigate } from "react-router-dom";


const DutyCardModal = (props) => {
    const navigate = useNavigate()
    const { open, handleClose, duty, swappable = false } = props
    const date = FormatDate(duty.date, false)
    const [nestedOpen, setNestedOpen] = useState(false);
    const handleNestedOpen = () => setNestedOpen(true);
    const handleNestedClose = () => setNestedOpen(false);
    
    const [infoOpen, setInfoOpen] = useState(false)
    const handleInfoOpen = () => setInfoOpen(true)
    const handleInfoClose = () => setInfoOpen(false)

    const handleSwapDuties = () => {
        handleClose()
        navigate(`/swap_duties/${duty.pk}`)
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
                    {duty.people.map((pupil) => {
                        return (
                            <Typography key={pupil.pk}>
                                {pupil.surname} {pupil.name} {pupil.second_name}
                            </Typography>
                        )
                    })}
                    {swappable ? (<div className="flex justify-evenly pt-2">
                    <Button variant="contained" onClick={handleSwapDuties}>
                        Обмен
                    </Button>
                    <Button variant="contained" onClick={handleNestedOpen}>
                        Замена
                    </Button>
                    <SwapResidentModal handleInfoOpen={handleInfoOpen} duty_pk={duty.pk} open={nestedOpen} handleClose={handleNestedClose} />
                    <InfoModal header={'Успех!'} description={'Запрос успешно отправлен'} open={infoOpen} handleClose={handleInfoClose} />
                    </div>) : (<div></div>)}
                </div>
            </Modal>
        </>
    )
}

export default DutyCardModal