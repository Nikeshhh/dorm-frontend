import { useState } from 'react'
import api from '../Api'
import { useEffect } from 'react'
import UserProposalCard from '../components/UserProposalCard'
import CreateNewProposalCard from '../components/CreateNewProposalCard'
import InfoModal from '../components/InfoModal'


const UserProposalsPage = () => {
    const [openInfoModal, setOpenInfoModal] = useState(false)
    const handleOpenInfoModal = () => {setOpenInfoModal(true)}
    const handleCloseInfoModal = () => {setOpenInfoModal(false)}

    const [proposalsData, setProposalsData] = useState(null)

    const fetchMyProposals = () => {
        api.get('v1/proposals/repair/my_proposals/').then(response => {
            setProposalsData(response.data)
        })
    }

    useEffect(() => {
        fetchMyProposals()
    }, [])

    return (
        <>
        <CreateNewProposalCard handleOpenInfo={handleOpenInfoModal} />
            {proposalsData ? proposalsData.map(proposal => {
            return (
                <UserProposalCard key={proposal.pk} proposal={proposal} handleOpenInfo={handleOpenInfoModal} />
            )
        }) : <></>}
        <InfoModal
            open={openInfoModal}
            handleClose={handleCloseInfoModal}
            header={'Успех!'}
            description={'Заявка успешно создана!'}

           />
        </>
    )
}

export default UserProposalsPage