import api from '../Api'
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import { useParams } from 'react-router-dom'
import DutySwapCard from '../components/DutySwapCard'


const DutiesToSwapPage = () => {
    const { duty_pk } = useParams()
    const [dutiesData, setDutiesData] = useState(null)
    const [content, setContent] = useState(null)

    const fetchDuties = () => {
        api.get('v1/duties/records/').then((response) => {
            setDutiesData(response.data)
        })
    }

    useEffect(() => {
        fetchDuties()
    }, [])

    useEffect(() => {
        setContent(
            dutiesData?.map((duty) => {
                return (<DutySwapCard parent_duty_pk={duty_pk} key={duty.pk} duty={duty} />)
            })
        )
    }, [dutiesData])

    return (
        <>
            {content ? content : <Loader />}
        </>
    )
}

export default DutiesToSwapPage