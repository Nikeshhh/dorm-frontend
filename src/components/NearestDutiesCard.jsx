import { useEffect, useState } from "react";
import api from "../Api";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import { FormatDate } from "../shared/DateServices";


const NearestDutiesCard = () => {
    const [duty, setDuty] = useState(null)
    const navigate = useNavigate()

    const fetchNearestDuty = () => {
        api.get('v1/duties/records/nearest_duty/').then((response) => {
            if (response.data.length > 0) {
                setDuty(response.data[0])
            }
        })
    }

    useEffect(() => {
        fetchNearestDuty()
    }, [])

    const handleRedirectMyDuties = () => {
        navigate('/my_duties')
    }

    return (
        <>
            <Card
                className="grid col-span-full align-center"
                style={{backgroundColor: '#32CD32', marginBottom: '10px', marginTop: '10px'}}
            >
                <div
                    onClick={handleRedirectMyDuties}
                >
                    <CardContent
                        className="flex justify-center items-center"
                    >
                        <Typography>
                            {duty === null ? 'Нет дежурств в ближайшее время' : 
                            <div>Ближайшее дежурство {FormatDate(duty.date, false)}</div>}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </>
    )
}

export default NearestDutiesCard