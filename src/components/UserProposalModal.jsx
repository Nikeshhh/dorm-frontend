/* eslint-disable react/prop-types */
import { Button, Modal, Typography } from "@mui/material"
import api from "../Api"
import { useCookies } from "react-cookie"
import { FormatDate } from "../shared/DateServices"


const UserProposalModal = (props) => {
    const { open, handleClose, proposal, handleOpenInfo } = props
    const [cookies] = useCookies(['csrftoken'])

    const handleCancelProposal = () => {
        api.post(`v1/proposals/repair/${proposal.pk}/cancel/`, {}, {
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
        <div className="p-4 rounded text-center"
            style={{ backgroundColor: "#E6E9E1", maxWidth: "90vw" }}
        >
            <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
                Заявка от {FormatDate(proposal.created_at, false)}
            </Typography>
            <Typography id="modal-modal-description" variant="h6" component="h2" gutterBottom>
                {proposal.description}
            </Typography>
                {proposal.status != '2' & proposal.status != '3' 
                ? 
                <Button onClick={handleCancelProposal} color="error" variant="contained">Отменить</Button>
                :
                <></>
                }
        </div>
    </Modal>
    )
}

export default UserProposalModal