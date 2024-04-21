/* eslint-disable react/prop-types */
import { Button, Modal, Typography } from "@mui/material";


const LaundryModal = (props) => {
    const { open, handleClose, record_pk, freeRecord } = props


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
                    style={{backgroundColor: "#E6E9E1"}}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Вы уверены?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Вы действительно хотите отменить запись?
                    </Typography>
                    <div className="flex justify-evenly pt-2">
                    <Button color="error" variant="contained" onClick={() => { freeRecord(record_pk); handleClose() }}>
                        Да
                    </Button>
                    <Button variant="contained" onClick={handleClose}>
                        Нет
                    </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default LaundryModal