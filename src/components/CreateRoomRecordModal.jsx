/* eslint-disable react/prop-types */
import { Modal } from "@mui/material"
import RoomRecordForm from "./RoomRecordForm"


const CreateRoomRecordModal = (props) => {
    const { open, handleClose } = props

    return (
        <>
            <Modal
                className="flex justify-center items-center"
                open={open}
                onClose={handleClose}
                // aria-labelledby="modal-modal-title"
                // aria-describedby="modal-modal-description"
            >
                <div className="p-4 rounded"
                    style={{ backgroundColor: "#E6E9E1", maxWidth: "90vw", minHeight: '250px' }}
                >
                <RoomRecordForm />
                </div>
            </Modal>
        </>
    )
}

export default CreateRoomRecordModal