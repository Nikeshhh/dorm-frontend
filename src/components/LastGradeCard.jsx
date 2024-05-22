import { Card, CardContent, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import api from "../Api"
import { FormatDate } from "../shared/DateServices"



const LastGradeCard = () => {
    const [recordData, setRecordData] = useState(null)

    const fetchLastRecord = () => {
        api.get('v1/rooms/room_records/my_last_room_record/').then(response => {
            setRecordData(response.data)
        })
    }

    useEffect(() => {
        fetchLastRecord()
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
                        recordData ?
                            <Typography>Последняя проверка: {FormatDate(recordData.date, false)} с оценкой {recordData.grade}</Typography>
                            :
                            <Typography>У вас нет записей у книге комнаты</Typography>
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default LastGradeCard