/* eslint-disable react/prop-types */
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Card, CardContent, Typography } from "@mui/material"
import { useState } from "react"
import CreateNewProposalModal from "./CreateNewProposalModal"


const CreateNewProposalCard = (props) => {
    const { handleOpenInfo } = props
    const [modalOpen, setModalOpen] = useState(false)
    const handleModalOpen = () => { setModalOpen(true) }
    const handleModalClose = () => { setModalOpen(false) }

    return (
        <Card>
            <div
                onClick={handleModalOpen}
            >
                <CardContent>
                    <div className='flex flex-col justify-center items-center'>
                        <AddCircleOutlineIcon />
                        <Typography> Новая заявка</Typography>
                    </div>
                </CardContent>
            </div>
            <CreateNewProposalModal open={modalOpen} handleClose={handleModalClose} handleOpenInfo={handleOpenInfo} />
        </Card>
    )
}

export default CreateNewProposalCard