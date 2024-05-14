/* eslint-disable react/prop-types */
import { Button, Modal, Typography } from "@mui/material";


const InfoModal = (props) => {
    const { open, handleClose, header, description, button_text = 'Ок' } = props

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
                        {header}
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                    <Button onClick={handleClose} variant="contained">
                        {button_text}
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default InfoModal