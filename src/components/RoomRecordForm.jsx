// import { Option, Select } from "@mui/joy"
import { Button, FormControl, Input, MenuItem, Select, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import api from "../Api"
import { useCookies } from "react-cookie"



const RoomRecordForm = () => {
    const [grade, setGrade] = useState(5)
    const [roomPk, setRoomPk] = useState('')
    const [comments, setComments] = useState('Замечаний нет')
    const [info, setInfo] = useState(null)
    const [cookies] = useCookies(['csrftoken'])
    const [rooms, setRooms] = useState(null)

    const handleGradeChange = (e) => {
        setGrade(e.target.value)
    }

    const fetchRooms = () => {
        api.get('v1/rooms/create_room_records/').then((response) => {
            setRooms(response.data)
        }).catch(() => {})
    }

    useEffect(() => {
        fetchRooms()
    }, [])

    const submitRecord = () => {
        // setIsLoading(true)
            const data = {
                room_pk: roomPk,
                comments: comments,
                grade: grade
            }
            api.post('v1/rooms/create_room_records/', data, {headers: {
                "X-CSRFToken": cookies['csrftoken']
            }}).then(() => {
                setInfo('Успешно')
            }).catch(() => { setInfo('Ошибка') })
            // setIsLoading(false)
    }

    return (
        <>
            <FormControl className="justify-between" style={{height: "250px"}}>
                <Input onChange={(e) => setRoomPk(rooms.find((room) => room.number == e.target.value).pk)} placeholder="Номер комнаты"></Input>
                <Input onChange={(e) => setComments(e.target.value)} placeholder="Замечаний нет"></Input>
                <Select value={grade} onChange={handleGradeChange}>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                </Select>
                <Button onClick={submitRecord} variant="contained">Записать</Button>
                <Typography style={{marginTop: '10px'}}>{info}</Typography>
            </FormControl>
        </>
    )
}

export default RoomRecordForm