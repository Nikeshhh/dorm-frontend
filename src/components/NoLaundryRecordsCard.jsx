import { Card, CardContent, Typography } from "@mui/material"


const NoLaundryRecordsCard = () => {
    return (
        <>
            <Card
                className="content-center"
                variant="outlined"
                style={{
                    height: "79vh"
                }}
            >
                <CardContent
                    className="flex flex-col justify-between items-center"
                >
                    <Typography>
                        УПС!
                    </Typography>
                    <Typography>
                        На сегодня в прачечной нет ни одной записи. Свяжитесь с администратором!
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default NoLaundryRecordsCard