import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';

function SendMotionButton() {
    const [buttonText, setButtonText] = useState<any>("SAVE");

    const handleClick = () => {
        
        //Get AST from DSL

        //JSONIFY AST

        // Send JSON

        //if (200OK) setButtonText(<CheckIcon/>);
        
    }

    return (
        <Button variant='contained' onClick={handleClick} color='success'>{buttonText}</Button>
    );
}

export default SendMotionButton;
