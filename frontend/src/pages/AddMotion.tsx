import React from 'react';
import CodeEditor from '../components/CodeEditor';
import SendMotionButton from '../components/SendMotionButton';

function AddMotion() {

  return (
    <>
      <div id='monaco-editor-root'>
        <CodeEditor />
      </div>
        <SendMotionButton />
    </>
  );
}

export default AddMotion;
