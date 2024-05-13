/* eslint-disable react/prop-types */
import { Modal, Typography } from "@mui/material";
import { FormatDate } from "../shared/DateServices";


const DutyCardModal = (props) => {
    const { open, handleClose, duty } = props
    const date = FormatDate(duty.date)


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
                </div>
            </Modal>
        </>
    )
}

export default DutyCardModal