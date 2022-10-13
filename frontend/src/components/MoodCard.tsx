import React from 'react';
import { Card, CardActionArea, Typography } from '@mui/material';

interface MoodProps {
    title: string,
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

    return (
        <Card variant='outlined' sx={{ width: 275, height: 200 }}>
            <CardActionArea onClick={handleClick} sx={{ width: 275, height: 200 }}>
                <Typography align='center'>{props.title}</Typography>
            </CardActionArea>
        </Card>
    );
}

export default MoodCard;
