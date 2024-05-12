/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import { FormatDate } from '../shared/DateServices';
import { useState } from 'react';
import RoomRecordModal from './RoomRecordModal';

const RoomBookRecordCard = (props) => {
    const { record } = props
    const date = FormatDate(record.date)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const cleanComments = () => {
        const comments = record.comments
        if (comments.length > 20) {
            return comments.slice(0, 20) + '...'
        }
        return comments
    }

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
                        <Typography>
                            {cleanComments()}
                        </Typography>
                        <Typography>
                            {record.grade}
                        </Typography>
                        <RoomRecordModal open={open} handleClose={handleClose} record={record} />
                    </CardContent>
                </div>
            </Card>
        </>
    )
}

export default RoomBookRecordCard