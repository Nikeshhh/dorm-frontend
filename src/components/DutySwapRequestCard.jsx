/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, Typography } from "@mui/material";
import { useState } from 'react';
import DutySwapRequestCardModal from './DutySwapRequestCardModal';

const DutySwapRequestCard = (props) => {
    const { swap_request, handleInfoAcceptedOpen, handleInfoDeclinedOpen } = props
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card
                className="grid col-span-full align-center"
            >
                <div
                    onClick={handleOpen}
                >
                    <CardContent
                        className="flex justify-between items-center"
                    >
                        <Typography>
                            Запрос на обмен дежурствами
                        </Typography>
                        <Button 
                            variant={(swap_request.accepted | swap_request.declined | swap_request.canceled) ? 'contained' : 'outlined'}
                            color={swap_request.declined | swap_request.canceled ? 'error' : 'primary'}
                        >
                            {swap_request.accepted ? 'Принят' : swap_request.declined ? 'Отклонен' : swap_request.canceled ? 'Отменен' : 'Отправлен'}
                        </Button>
                    </CardContent>
                </div>
            </Card>
                        <DutySwapRequestCardModal
                            open={open}
                            handleClose={handleClose}
                            swap_request={swap_request}
                            handleInfoAcceptedOpen={handleInfoAcceptedOpen}
                            handleInfoDeclinedOpen={handleInfoDeclinedOpen}
                        />
        </>
    )
}

export default DutySwapRequestCard