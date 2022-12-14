import React, { useState } from 'react';
import Button from '@mui/material/Button';

function SendMotionButton() {
    const [buttonText, setButtonText] = useState<any>("SAVE");

    const handleClick = () => {

        setButtonText("DONE");
        
        //Get AST from DSL

        //JSONIFY AST

        // Send JSON

        //if (200OK) setButtonText(<CheckIcon/>);
        
    }

    return (
        <Button variant='contained' onClick={handleClick} color='success' size='large'>{buttonText}</Button>
    );
}

export default SendMotionButton;
