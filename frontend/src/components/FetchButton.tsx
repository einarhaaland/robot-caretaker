import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function FetchButton() {
    const [result, setResult] = useState<{status: number}>()

    const handleClick = () => {
        console.log("TESTING ROBOT CONNECTION..")
        fetch("/test_robot_connection")
            .then((res) => res.json())
            .then((data) => {
                setResult(data)
                console.log("..DONE")
            })
    }

    return (
        <Box textAlign='center'>
            <Button variant='contained'>Test Robot Connection</Button>
        </Box>
    );
}

export default FetchButton;
