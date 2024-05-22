import { Card, CardContent, Typography } from "@mui/material"
import api from "../Api"
import { useEffect, useState } from "react"


const YourLaundryRecordsCard = () => {
    const [myRecords, setMyRecords] = useState([])
    const [message, setMessage] = useState('')

    const fetchMyRecords = () => {
        api.get('v1/laundry/records/my_records_today/').then(response => {
            setMyRecords(response.data)
        })
    }

    const fetchFreeRecords = () => {
        api.get('v1/laundry/records/today_records_stats/').then(response => {
            setMessage(response.data.message)
        })
    }

    useEffect(() => {
        fetchMyRecords()
        fetchFreeRecords()
    }, [])

    return (
        <>
            <Card
                className="grid col-span-full align-center rounded"
                style={{backgroundColor: '#228B22', marginBottom: '10px', marginTop: '10px'}}
            >
                <CardContent
                    className="flex justify-center items-center"
                >
                    {
                        myRecords.length > 0 ?
                            <Typography>У вас сегодня запись в {myRecords[0].time_start.slice(0, 5)}</Typography>
                            :
                            <Typography>{message}</Typography>
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default YourLaundryRecordsCard