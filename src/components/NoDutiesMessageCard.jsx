import { Card, CardContent, Typography } from "@mui/material"


const NoDutiesMessageCard = () => {
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
                        Ой!
                    </Typography>
                    <Typography>
                        У вас нет дежурств в ближайшее время!
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default NoDutiesMessageCard