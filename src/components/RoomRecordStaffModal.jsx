/* eslint-disable react/prop-types */
import { Modal, Typography } from "@mui/material";


const RoomRecordStaffModal = (props) => {
    const { open, handleClose, record } = props

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
                        Оценка {record.grade}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {record.comments}
                    </Typography>
                    <Typography>
                        Комната {record.room.number}
                    </Typography>
                </div>
            </Modal>
        </>
    )
}

export default RoomRecordStaffModal