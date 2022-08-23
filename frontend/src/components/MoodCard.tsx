import React, { useState, useEffect } from 'react';

interface MoodProps {
    title: string,
}


function MoodCard(props: MoodProps) {
    
    const handleClick = () => {
        console.log(props.title)
    }

    return (
        <div className='moodCard'>
            <button onClick={handleClick}>{props.title}</button>
        </div>
    );
}

export default MoodCard;
