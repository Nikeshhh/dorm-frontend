/* eslint-disable react/prop-types */
import { useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import api from '../Api'
import { Button, Typography } from "@mui/material";
import { useCookies } from "react-cookie";


const LaundryCard = (props) => {
    const { record, onError } = props
    const [cookies] = useCookies(['csrftoken'])
    const [isAvailable, setIsAvailable] = useState(record.is_available)
    const [isOwned, setIsOwned] = useState(record.is_owned)

    const reserveRecord = (record_pk) => {
        api.post(`/v1/laundry/records/${record_pk}/take_record/`, {}, {
            headers: {
                "X-CSRFToken": cookies['csrftoken']
            }
        }).then(() => {
            setIsAvailable(false)
            setIsOwned(true)
        }).catch(() => onError())
    }

    const freeRecord = (record_pk) => {
        api.post(`/v1/laundry/records/${record_pk}/free_record/`, {}, {
            headers: {
                "X-CSRFToken": cookies['csrftoken']
            }
        }).then(() => {
            setIsAvailable(true)
            setIsOwned(false)
        }).catch(() => onError())
    }

    return (
        <Card
            className="grid col-span-full align-center"
        >
            <CardContent
                className="flex justify-between items-center"
            >
                <Typography>
                    {record.time_start.slice(0, 5)} - {record.time_end.slice(0, 5)}
                </Typography>
                <Typography>
                    {isOwned ? 'Yours' : isAvailable ? 'Free' : 'Not free'}
                </Typography>
                <Button
                    variant="contained"
                    disabled={!isOwned && !isAvailable}
                    onClick={isOwned ? () => freeRecord(record.pk) : () => reserveRecord(record.pk)}
                    color={isOwned ? 'error' : 'success'}
                >
                    {isOwned ? 'X' : '+'}
                </Button>
            </CardContent>
        </Card>
    )
}

export default LaundryCard