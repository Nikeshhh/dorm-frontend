import api from '../Api'
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import DutyCard from "../components/DutyCard"


const AllDutiesPage = () => {
    const [dutiesData, setDutiesData] = useState(null)
    const [content, setContent] = useState(null)

    const fetchDuties = () => {
        api.get('v1/duties/records/').then((response) => {
            setDutiesData(response.data)
        }).catch(() => {

        })
    }

    useEffect(() => {
        fetchDuties()
    }, [])

    useEffect(() => {
        setContent(
            dutiesData?.map((duty) => {
                return (<DutyCard key={duty.pk} duty={duty} />)
            })
        )
    }, [dutiesData])

    return (
        <>
            {content ? content : <Loader />}
        </>
    )
}

export default AllDutiesPage