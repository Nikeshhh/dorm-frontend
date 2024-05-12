import { useEffect, useState } from "react"
import api from "../Api"
import Loader from "../components/Loader"
import RoomRecordStaffCard from "../components/RoomRecordStaffCard"
import { AddCircle } from "@mui/icons-material"
import { ButtonBase } from "@mui/material"
import CreateRoomRecordModal from "../components/CreateRoomRecordModal"


const RoomBookStaffPage = () => {
    const [recordsData, setRecordsData] = useState(null)
    const [content, setContent] = useState(null)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchBookRecords = () => {
        api.get('v1/rooms/create_room_records/today_created/').then(response => {
            setRecordsData(response.data)
        })
    }

    useEffect(() => {
        fetchBookRecords()
    }, [])

    useEffect(() => {
        setContent(recordsData?.map(record => {
            return (
                <RoomRecordStaffCard key={record.pk} record={record} />
            )
        }))
    }, [recordsData])

    return (
        <>
        <div className="flex justify-center">
        <ButtonBase onClick={handleOpen}>
            <AddCircle style={{width: '150px', height: '150px'}} htmlColor="green"/>
        </ButtonBase>
        </div>
        <CreateRoomRecordModal open={open} handleClose={handleClose} />
        {content ? content : <Loader />}
        </>
    )
}

export default RoomBookStaffPage