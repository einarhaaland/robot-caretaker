import React, { useEffect } from 'react';
import CodeEditor from '../components/CodeEditor';
import SendMotionButton from '../components/SendMotionButton';
import { setupMonacoEditor, getEditorValue } from '../utils/monaco-setup';
import Button from '@mui/material/Button';


function AddMotion() {
  useEffect(() => {
    // Make generator bundle available
    const script = document.createElement('script');
    script.src = '../../public/rml-generator.js';
    script.async = true;
    document.body.appendChild(script)

    // Setup monaco editor. Doing it this way instead of in a component makes it load a bit later than the rest of the page
    setupMonacoEditor();
  }, []);

  const handleClick = (async () => {
    //Get code from editor
    const value = getEditorValue();

    // Parse & Generate
    const rml = await RML.parseAndGenerate(value); // Global name RML does not seem to exist

    //JSONIFY AST
    const motion = JSON.stringify(rml);

    // Set request Options
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: motion
    }

    // Send JSON
    console.log("SENDING NEW MOOD..")
    fetch("http://localhost:5000/add-motion", requestOptions)
    
  });

  return (
    <>
      <div id='monaco-editor-root'>
      </div>
      <p style={{fontFamily: 'roboto', fontWeight: 'bold', textAlign: 'center', marginTop: '40vh'}}>Click the button below to add your defined MOTION to the system:</p>
      <div style={{marginLeft: '22.5vw', float: 'left'}}>
        <Button variant='contained' onClick={handleClick} color='success' size='large'>{'SAVE'}</Button>
      </div>
    </>
  );
}

export default AddMotion;
