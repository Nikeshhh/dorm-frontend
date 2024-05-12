/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import { useState } from 'react';
import RoomRecordStaffModal from './RoomRecordStaffModal';

const RoomRecordStaffCard = (props) => {
    const { record } = props
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
                            {record.grade}
                        </Typography>
                        <Typography>
                            {cleanComments()}
                        </Typography>
                        <Typography>
                            {record.room.number}
                        </Typography>
                        <RoomRecordStaffModal open={open} handleClose={handleClose} record={record} />
                    </CardContent>
                </div>
            </Card>
        </>
    )
}

export default RoomRecordStaffCard