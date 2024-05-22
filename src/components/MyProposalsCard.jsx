import { Card, CardContent, Typography } from "@mui/material"
import api from "../Api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const MyProposalsCard = () => {
    const [proposalsData, setProposalsData] = useState([])
    const navigate = useNavigate()

    const fetchMyProposals = () => {
        api.get('v1/proposals/repair/my_proposals/').then(response => {
            setProposalsData(response.data)
        })
    }

    const handleRedirectMyProposals = () => {
        navigate('/my_proposals')
    }


    useEffect(() => {
        fetchMyProposals()
    }, [])

    return (
        <>
            <div
                onClick={handleRedirectMyProposals}
            >
                <Card
                    className="grid col-span-full align-center rounded"
                    style={{ backgroundColor: '#32CD32', marginBottom: '10px', marginTop: '10px', minHeight: '18em' }}
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
            </div>
        </>
    )
}

export default MyProposalsCard