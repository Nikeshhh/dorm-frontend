import { Card, CardContent, Typography } from "@mui/material"


const NoRoomBookRecordsCard = () => {
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
                        Тут ничего нет!
                    </Typography>
                    <Typography>
                        Записей в вашей книге комнаты еще нет!
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default NoRoomBookRecordsCard