import api from '../Api'
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import DutySwapRequestCard from '../components/DutySwapRequestCard'
import InfoModal from '../components/InfoModal'
import PeopleSwapRequestCard from '../components/PeopleSwapRequestCard'


const NotificationsPage = () => {
    const [notificationsData, setNotificationsData] = useState([])
    const [content, setContent] = useState(null)

    const [infoAcceptedOpen, setInfoAcceptedOpen] = useState(false)
    const handleInfoAcceptedOpen = () => setInfoAcceptedOpen(true)
    const handleInfoAcceptedClose = () => setInfoAcceptedOpen(false)

    const [infoDeclinedOpen, setInfoDeclinedOpen] = useState(false)
    const handleInfoDeclinedOpen = () => setInfoDeclinedOpen(true)
    const handleInfoDeclinedClose = () => setInfoDeclinedOpen(false)

    const fetchSwapRequests = () => {
        api.get('v1/duties/swap-requests/').then((response) => {
            setNotificationsData(response.data)
        }).catch(() => {

        })
    }


    useEffect(() => {
            fetchSwapRequests()
    }, [])

    useEffect(() => {
        setContent(
            notificationsData?.map((swap_request) => {
                if (swap_request.current_user) {
                    return (<PeopleSwapRequestCard
                        key={swap_request.pk}
                        swap_request={swap_request}
                        handleInfoAcceptedOpen={handleInfoAcceptedOpen}
                        handleInfoDeclinedOpen={handleInfoDeclinedOpen}
                    />)
                }
                else {
                    return (<DutySwapRequestCard
                        key={swap_request.pk}
                        swap_request={swap_request}
                        handleInfoAcceptedOpen={handleInfoAcceptedOpen}
                        handleInfoDeclinedOpen={handleInfoDeclinedOpen}
                    />)
                }
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