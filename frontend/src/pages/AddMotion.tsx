import React from 'react';
import CodeEditor from '../components/CodeEditor';
import Button from '@mui/material/Button';

// This makes typescript not complain on added properties to window object
declare global {
      interface Window {
        client: any;
        RML: any;
      }
}

function AddMotion() {

  const handleClick = (async () => {
    // Get code from editor
    const value = window.client.getMainCode();

    // Generate RML object
    const rml = await window.RML.parseAndGenerate(value);
    console.log("Generated JSON From RML", rml);

    //if has errors, set error message and return

    //JSONIFY AST
    const motion = JSON.stringify(rml);

    // Set request Options
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: motion
    }

    // Send JSON
    console.log("CREATING NEW MOTION..")
    fetch("http://localhost:5000/motion", requestOptions)
      .then(res => console.log(res.ok ? "MOTION CREATED" : "COULD NOT CREATE"));
  });

  return (
    <>
      <div id='monaco-editor-root'>
        <CodeEditor/>
      </div>
      <p style={{fontFamily: 'roboto', fontWeight: 'bold', textAlign: 'center', marginTop: '40vh'}}>Click the button below to add your defined MOTION to the system:</p>
      <div style={{marginLeft: '22.5vw', float: 'left'}}>
        <Button variant='contained' onClick={handleClick} color='success' size='large'>{'SAVE'}</Button>
      </div>
    </>
  );
}

export default AddMotion;
