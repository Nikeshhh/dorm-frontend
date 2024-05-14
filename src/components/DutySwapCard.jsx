/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import { FormatDate } from '../shared/DateServices';
import { useState } from 'react';
import DutySwapCardModal from './DutySwapCardModal';
import InfoModal from './InfoModal';

const DutySwapCard = (props) => {
    const { duty, parent_duty_pk, swappable = false } = props
    const date = FormatDate(duty.date)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [infoOpen, setInfoOpen] = useState(false)
    const handleInfoOpen = () => setInfoOpen(true)
    const handleInfoClose = () => setInfoOpen(false)

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
                        <div>
                            {duty.people.map((pupil) => {
                                return (
                                    <Typography key={pupil.pk}>
                                        {pupil.surname} {pupil.name}
                                    </Typography>
                                )
                            })}
                        </div>
                        <DutySwapCardModal handleInfoOpen={handleInfoOpen} open={open} parent_duty_pk={parent_duty_pk} handleClose={handleClose} duty={duty} swappable={swappable} />
                        <InfoModal header={'Успех!'} description={'Запрос успешно отправлен'} open={infoOpen} handleClose={handleInfoClose} />
                    </CardContent>
                </div>
            </Card>
        </>
    )
}

export default DutySwapCard