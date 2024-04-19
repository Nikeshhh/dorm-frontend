import { useEffect, useState } from "react"
import LaundryCard from "../components/LaundryCard"
import api from '../Api'
import Loader from "../components/Loader"
import ErrorCard from "../components/ErrorCard"


const LaundryPage = () => {
    const [recordsData, setRecordsData] = useState(null)
    const [records, setRecords] = useState(null)

    const fetchRecords = () => {
        api.get('/v1/laundry/records/today_records_list/').then(response => {
            setRecordsData(response.data)
        }).catch(() => {
            setRecords(<ErrorCard />)
        })
    }

    const onError = () => {
        setRecords()
        fetchRecords()
    }

    useEffect(() => {
        fetchRecords()
    }, [])

    useEffect(() => {
        setRecords(recordsData?.map(recordData => {
            return (
                <LaundryCard key={recordData.pk} record={recordData} onError={onError}/>
            )
        }))
    }, [recordsData])

    return (
        <>
            <div className="my-auto grid grid-cols-4 grid-rows-5 bg-white gap-y-2 gap-x-4">
                {records ? records : <Loader />}
            </div>
        </>
    )
}

export default LaundryPage