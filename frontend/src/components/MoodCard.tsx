import React, { useState, useEffect } from 'react';

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
        <div className='moodCard'>
            <button onClick={handleClick}>{props.title}</button>
        </div>
    );
}

export default MoodCard;
