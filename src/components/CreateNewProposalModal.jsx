/* eslint-disable react/prop-types */
import { Button, FormControl, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react"
import api from "../Api"
import { useCookies } from "react-cookie"


const CreateNewProposalModal = (props) => {
    const { open, handleClose, handleOpenInfo } = props

    const [cookies] = useCookies(['csrftoken'])

    const [description, setDescription] = useState('')

    
    const handleCreateProposal = () => {
        const post_data = {
            description: description
        }
        api.post('v1/proposals/repair/', post_data, {
            headers: {
                "X-CSRFToken": cookies['csrftoken']
            }
        }).then(() => {
            handleClose()
            handleOpenInfo()
        })
    }


    return (
        <Modal
            className="flex justify-center items-center"
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="p-4 rounded"
                    style={{ backgroundColor: "#E6E9E1", maxWidth: "90vw"}}
                >
                <Typography id="modal-modal-title" gutterBottom>
                    Создать новую заявку
                </Typography>
            <FormControl>
                <TextField onChange={(e) => setDescription(e.target.value)} placeholder="..."></TextField>
                <Button
                    onClick={handleCreateProposal}
                    variant="contained"
                >
                    Отправить
                </Button>
            </FormControl>
            </div>
        </Modal>
    )
}

export default CreateNewProposalModal