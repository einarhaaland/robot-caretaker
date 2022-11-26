import React, { useEffect } from 'react';
import CodeEditor from '../components/CodeEditor';
import SendMotionButton from '../components/SendMotionButton';

function AddMotion() {
  useEffect(() => {
    const script = document.createElement('script');
    
    script.src = '../../public/rml-generator.js';
    script.async = true;

    document.body.appendChild(script)

    //call util function creating monaco editor

  }, []);

  return (
    <>
      <div id='monaco-editor-root'>
        <CodeEditor />
      </div>
      <p style={{fontFamily: 'roboto', fontWeight: 'bold', textAlign: 'center', marginTop: '40vh'}}>Click the button below to add your defined MOTION to the system:</p>
      <div style={{marginLeft: '22.5vw', float: 'left'}}>
        <SendMotionButton />
      </div>
    </>
  );
}

export default AddMotion;
