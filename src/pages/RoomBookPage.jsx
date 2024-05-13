import { useEffect, useState } from "react"
import api from "../Api"
import RoomBookRecordCard from '../components/RoomBookRecordCard'
import Loader from "../components/Loader"
import NoRoomBookRecordsCard from "../components/NoRoomBookRecordsCard"


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
        if (recordsData !== null) {
            if (recordsData.length > 0) {
                setContent(recordsData?.map(record => {
                    return (
                        <RoomBookRecordCard key={record.pk} record={record} />
                    )
                }))
            }
            else {
                setContent(
                    <NoRoomBookRecordsCard />
                )
            }
        }
        
    }, [recordsData])

    return (
        <>
        {content ? content : <Loader />}
        </>
    )
}

export default RoomBookPage