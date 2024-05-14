import api from '../Api'
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import DutyCard from "../components/DutyCard"
import NoDutiesMessageCard from "../components/NoDutiesMessageCard"


const MyDutiesPage = () => {
    const [dutiesData, setDutiesData] = useState(null)
    const [content, setContent] = useState(null)

    const fetchDuties = () => {
        api.get('v1/duties/records/my_duties/').then((response) => {
            setDutiesData(response.data)
        }).catch(() => {

        })
    }

    useEffect(() => {
        fetchDuties()
    }, [])

    useEffect(() => {
        if (dutiesData?.length > 0) {
            setContent(
                dutiesData?.map((duty) => {
                    return (<DutyCard key={duty.pk} swappable={true} duty={duty} />)
                })
            )
        }
        else {
            setContent(
                <NoDutiesMessageCard />
            )
        }
    }, [dutiesData])

    return (
        <>
            {content ? content : <Loader />}
        </>
    )
}

export default MyDutiesPage