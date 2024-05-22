/* eslint-disable react/prop-types */
import { Button, Card, CardContent, Typography } from "@mui/material"
import { FormatDate } from "../shared/DateServices"
import UserProposalModal from "./UserProposalModal"
import { useState } from "react"


const UserProposalCard = (props) => {
    const { proposal, handleOpenInfo } = props

    const [modalOpen, setModalOpen] = useState(false)
    const handleModalOpen = () => { setModalOpen(true) }
    const handleModalClose = () => { setModalOpen(false) }

    const cleanDescription = () => {
        const description = proposal.description
        if (description.length > 10) {
            return description.slice(0, 20) + '...'
        }
        return description
    }

    return (
        <Card
            className="grid col-span-full align-center"
        >
            <div
                onClick={handleModalOpen}
            >
                <CardContent
                    className="flex justify-between items-center"
                >
                    <Typography>
                        {FormatDate(proposal.created_at, false)}
                    </Typography>
                    <Typography>
                        {cleanDescription()}
                    </Typography>
                    <Button
                        variant={proposal.status == '0' ? 'outlined' : 'outlined'}
                        color={proposal.status == '0' ? 'primary' : proposal.status == '1' ? 'primary' : proposal.status == '2' ? 'success' : 'error'}
                    >
                        {proposal.status == '0' ? 'Создана' : proposal.status == '1' ? 'Выполняется' : proposal.status == '2' ? 'Выполнена' : 'Отменена'}
                    </Button>
                </CardContent>
            </div>
            <UserProposalModal open={modalOpen} handleClose={handleModalClose} proposal={proposal} handleOpenInfo={handleOpenInfo} />
        </Card>
    )
}

export default UserProposalCard