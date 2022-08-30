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
        <Box textAlign='center' display="flex" justifyContent="center" alignItems="center" sx={{height: "200px"}}>
            <Button variant='contained' onClick={handleClick}>Test Robot Connection</Button>
            <p>{result && "STATUS: " + result.status}</p>
        </Box>
    );
}

export default FetchButton;
