import { useEffect, useState } from "react"
import api from "../Api"
import RoomBookRecordCard from '../components/RoomBookRecordCard'
import Loader from "../components/Loader"


const RoomBookPage = () => {
    const [recordsData, setRecordsData] = useState(null)
    const [content, setContent] = useState(null)

    const fetchBookRecords = () => {
        api.get('v1/rooms/room_records/').then(response => {
            setRecordsData(response.data)
        })
    }

    useEffect(() => {
        fetchBookRecords()
    }, [])

    useEffect(() => {
        setContent(recordsData?.map(record => {
            return (
                <RoomBookRecordCard key={record.pk} record={record} />
            )
        }))
    }, [recordsData])

    return (
        <>
        {content ? content : <Loader />}
        </>
    )
}

export default RoomBookPage