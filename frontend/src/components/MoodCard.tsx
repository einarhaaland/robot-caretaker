import React from 'react';
import { Card, CardActionArea, Typography } from '@mui/material';

type MoodProps = {
    title: string;
    addScheduled: (val: string) => void;
}


function MoodCard(props: MoodProps) {
    
    const handleClick = () => {
        console.log(`SENDING MOOD ${props.title}..`)
        fetch(`http://localhost:5000/mood/${props.title}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(`..${data.mood} HAS BEEN PERFORMED`)
            })
    }

    const handleRightClick = (e: any) =>  {
        e.preventDefault();
        console.log("SCHEDULED MOTION: " + e.target.innerText)
        props.addScheduled(e.target.innerText)
    }

    return (
        <Card variant='outlined' sx={{ width: 240, height: 150 }}>
            <CardActionArea onClick={handleClick} onContextMenu={handleRightClick} sx={{ width: 240, height: 150 }}>
                <Typography align='center'>{props.title}</Typography>
            </CardActionArea>
        </Card>
    );
}

export default MoodCard;
