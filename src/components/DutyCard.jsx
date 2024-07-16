/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import { FormatDate } from '../shared/DateServices';
import { useState } from 'react';
import DutyCardModal from './DutyCardModal';

const DutyCard = (props) => {
    const { duty, swappable = false } = props
    const date = FormatDate(duty.date, false)
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
                            {date}
                        </Typography>
                        <div className='text-center'>
                            {duty.people.map((pupil) => {
                                return (
                                    <Typography key={pupil.pk}>
                                        {pupil.surname} {pupil.name}
                                    </Typography>
                                )
                            })}
                        </div>
                        <DutyCardModal open={open} handleClose={handleClose} duty={duty} swappable={swappable} />
                    </CardContent>
                </div>
            </Card>
        </>
    )
}

export default DutyCard