import { Card, CardContent, Typography } from "@mui/material"


const ErrorCard = () => {
    return (
        <>
            <Card
                className="col-start-2 col-end-4 row-span-full"
                variant="outlined"
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