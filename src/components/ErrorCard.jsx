import { Card, CardContent, Typography } from "@mui/material"


const ErrorCard = () => {
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
                        Что-то пошло не так...
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default ErrorCard