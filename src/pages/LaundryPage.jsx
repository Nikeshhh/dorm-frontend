import { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import api from '../Api'
import { Button, Typography } from "@mui/material";
import { useCookies } from "react-cookie";


const LaundryPage = () => {
    const [recordsData, setRecordsData] = useState(null)
    const [records, setRecords] = useState(null)
    const [cookies] = useCookies(['csrftoken'])

    const fetchRecords = () => {
        api.get('/v1/laundry/records/today_records_list/').then(response => {
            console.log(response.data)
            setRecordsData(response.data)
        })
    }

    const reserveRecord = (record_pk) => {
        api.post(`/v1/laundry/records/${record_pk}/take_record/`, {}, {
            headers: {
                "X-CSRFToken": cookies['csrftoken']
            }
        }).then(response => {
            console.log(response)
        })
    }

    useEffect(() => {
        fetchRecords()
    }, [])

    useEffect(() => {
        const r_data = recordsData
        setRecords(r_data?.map(record => {
            return (
                <Card
                    key={record.pk}
                    className="grid col-span-full align-center"
                >
                    <CardContent
                        className="flex justify-between items-center"
                    >
                        <Typography>
                            {record.time_start.slice(0, 5)} - {record.time_end.slice(0, 5)}
                        </Typography>
                        <Typography>
                            {record.is_available ? 'Free' : 'Not free'}
                        </Typography>
                        <Button
                            variant="contained"
                            disabled={!record.is_available}
                            onClick={() => reserveRecord(record.pk)}
                        >
                            +
                        </Button>
                    </CardContent>
                </Card>
            )
        }))
    }, [recordsData])

    useEffect(() => {
        console.log(recordsData)
    }, [recordsData])


    return (
        <>
            <div className="mx-10 my-auto grid grid-cols-4 grid-rows-5 bg-white gap-y-2 gap-x-4">
                {records}
            </div>
        </>
    )
}

export default LaundryPage