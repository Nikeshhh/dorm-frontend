import { Card, CardContent, Typography } from "@mui/material"
import api from "../Api"
import { useEffect, useState } from "react"


const MyProposalsCard = () => {
    const [proposalsData, setProposalsData] = useState([])

    const fetchMyProposals = () => {
        api.get('v1/laundry/records/my_records_today/').then(response => {
            setProposalsData(response.data)
        })
    }


    useEffect(() => {
        fetchMyProposals()
    }, [])

    return (
        <>
            <Card
                className="grid col-span-full align-center rounded"
                style={{backgroundColor: '#32CD32', marginBottom: '10px', marginTop: '10px', minHeight: '18em'}}
            >
                <CardContent
                    className="flex justify-center items-center"
                >
                    {
                        proposalsData.length > 0 ?
                            <Typography>У вас {proposalsData.length} активных заявок на ремонт</Typography>
                            :
                            <Typography>У вас нет активных заявок на ремонт</Typography>
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default MyProposalsCard