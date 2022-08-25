import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, Typography } from '@mui/material';

interface MoodProps {
    title: string,
}


function MoodCard(props: MoodProps) {
    
    const handleClick = () => {
        console.log(`SENDING MOOD ${props.title}..`)
        fetch(`/mood/${props.title}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(`..${data.mood} HAS BEEN PERFORMED`)
            })
    }

    return (
        <Card variant='outlined'>
            <CardActionArea onClick={handleClick}>
                <Typography>{props.title}</Typography>
            </CardActionArea>
        </Card>
    );
}

export default MoodCard;
