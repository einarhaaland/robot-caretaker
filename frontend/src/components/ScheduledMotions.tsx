import React from 'react';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


type scheduledProps = {
    cards: string[];
    clearScheduled: () => void;
}

function ScheduledMotions(props: scheduledProps) {

    const sendSchedule = () => {
        // Set request Options
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"schedule": props.cards})
        }

        // Send JSON
        console.log("Sending Scheduled..")
        fetch("http://localhost:5000/schedule", requestOptions)
            .then(res => console.log(res.ok ? "SCHEDULE PERFORMED" : "COULD NOT PERFORM"));

        // Clear Schedule
        props.clearScheduled()
    }

    return (
        <div style={{backgroundColor: "burlywood",
                    margin: "0px",
                    height: "10vh",
                    width: "100vw",
                    position: "absolute",
                    left: "0",
                    bottom: "200px",
                    maxWidth: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center" }}>
            {
                props.cards.map((card) => (
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <p style={{fontSize: "xxx-large", fontFamily: "roboto", margin: "50px"}}>{card}</p>
                        <EastIcon sx={{margin: "20px"}}/>
                    </div>
                ))
            }
            <Button variant='contained' onClick={sendSchedule} color='success' size='large' sx={{margin: "50px"}}>Perform</Button>
            <IconButton aria-label="add" size="large" onClick={props.clearScheduled} sx={{marginRight: "20px", size: "large", color:'#e41b36', fontSize: "2.75rem"}}>
                <DeleteIcon fontSize='inherit'/>
            </IconButton>

        </div>
        
    );
}

export default ScheduledMotions;