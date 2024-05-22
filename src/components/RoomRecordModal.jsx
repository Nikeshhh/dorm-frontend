/* eslint-disable react/prop-types */
import { Modal, Typography } from "@mui/material";
import { FormatDate } from "../shared/DateServices";


const RoomRecordModal = (props) => {
    const { open, handleClose, record } = props
    const date = FormatDate(record.date)


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
                        Автор:
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {record.author.surname} {record.author.name} {record.author.second_name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Оценка: {record.grade}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {record.comments}
                    </Typography>
                    <Typography>
                        {date}
                    </Typography>
                </div>
            </Modal>
        </>
    )
}

export default RoomRecordModal