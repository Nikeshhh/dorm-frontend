import api from '../Api'
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import DutySwapRequestCard from '../components/DutySwapRequestCard'
import InfoModal from '../components/InfoModal'


const NotificationsPage = () => {
    const [notificationsData, setNotificationsData] = useState(null)
    const [content, setContent] = useState(null)

    const [infoAcceptedOpen, setInfoAcceptedOpen] = useState(false)
    const handleInfoAcceptedOpen = () => setInfoAcceptedOpen(true)
    const handleInfoAcceptedClose = () => setInfoAcceptedOpen(false)

    const [infoDeclinedOpen, setInfoDeclinedOpen] = useState(false)
    const handleInfoDeclinedOpen = () => setInfoDeclinedOpen(true)
    const handleInfoDeclinedClose = () => setInfoDeclinedOpen(false)

    const fetchSwapDuties = () => {
        api.get('v1/duties/swap-duties/get_incoming_requests/').then((response) => {
            setNotificationsData(response.data)
        }).catch(() => {

        })
    }

    useEffect(() => {
        fetchSwapDuties()
    }, [])

    useEffect(() => {
        setContent(
            notificationsData?.map((swap_request) => {
                return (<DutySwapRequestCard
                    key={swap_request.pk}
                    swap_request={swap_request}
                    handleInfoAcceptedOpen={handleInfoAcceptedOpen}
                    handleInfoDeclinedOpen={handleInfoDeclinedOpen}
                />)
            })
        )
    }, [notificationsData])

    return (
        <>
            {content ? content : <Loader />}
            <InfoModal header={'Успех!'} description={'Запрос успешно отклонен'} open={infoDeclinedOpen} handleClose={handleInfoDeclinedClose} />
            <InfoModal header={'Успех!'} description={'Запрос успешно принят'} open={infoAcceptedOpen} handleClose={handleInfoAcceptedClose} />
        </>
    )
}

export default NotificationsPage