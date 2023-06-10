import React, { useEffect } from 'react';
import { MonacoEditorLanguageClientWrapper } from 'monaco-editor-wrapper';
import { buildWorkerDefinition } from 'monaco-editor-workers';


function CodeEditor() {

    useEffect(() => {
        buildWorkerDefinition('../../public/monaco-editor-workers/workers', new URL('', window.location.href).href, false);

        MonacoEditorLanguageClientWrapper.addMonacoStyles('monaco-editor-styles');
        MonacoEditorLanguageClientWrapper.addCodiconTtf();

        const client = new MonacoEditorLanguageClientWrapper('42');
        const editorConfig = client.getEditorConfig();
        editorConfig.setMainLanguageId('robot-motion-language');

        editorConfig.setMonarchTokensProvider({
            keywords: [
                'define','end','move','multimove','repeat','to'
            ],
            operators: [
        
            ],

            symbols: /\/\//,
        
            tokenizer: {
                initial: [
                    { regex: /[+-]?[0-9]+(\.[0-9]*)?/, action: {"token":"number"} },
                    { regex: /[_a-zA-Z][\w_]*/, action: { cases: { '@keywords': {"token":"keyword"}, '@default': {"token":"ID"} }} },
                    { include: '@whitespace' },
                    { regex: /@symbols/, action: { cases: { '@operators': {"token":"operator"}, '@default': {"token":""} }} },
                ],
                whitespace: [
                    { regex: /\s+/, action: {"token":"white"} },
                    { regex: /\/\*/, action: {"token":"comment","next":"@comment"} },
                    { regex: /\/\/[^\n\r]*/, action: {"token":"comment"} },
                ],
                comment: [
                    { regex: /[^\/\*]+/, action: {"token":"comment"} },
                    { regex: /\*\//, action: {"token":"comment","next":"@pop"} },
                    { regex: /[\/\*]/, action: {"token":"comment"} },
                ],
            }
        });

        editorConfig.setMainCode(`// Welcome to the RML (Robot Motion Language) editor!
// See https://github.com/einarhaaland/robot-caretaker#robot-motion-language-rml for a tutorial.

define swing_arms
    repeat 3
        multimove
            move right shoulder pitch to 1
            move left shoulder pitch to 2
        end
        multimove
            move right shoulder pitch to 2
            move left shoulder pitch to 1
        end
    end
    multimove
            move right shoulder pitch to 1.5
            move left shoulder pitch to 1.5
    end
end

/*
USAGE
--------------------------------------------------------------------------------------------------
define <your_motion_name>
    <Rest of RML code is indented and goes here>
end
* Note that <your_motion_name> is arbitrary, but don't include spaces.
--------------------------------------------------------------------------------------------------
repeat <amount>
    <RML code to be repeated is indented and goes here>
end
* Note that <amount> is an arbitrary integer.
--------------------------------------------------------------------------------------------------
multimove
    <RML to be performed simultainously is indented>
end
--------------------------------------------------------------------------------------------------
move <side> <joint> <rotation> to <position>
* Note that <side> and <rotation> is not always needed depending on the joint.
==================================================================================================
Available options for <side>:
    right | left
--------------------------------------------------------------------------------------------------
Available options for <joint>:
    head | fingers | wrist | elbow | shoulder | torso | hip | knee | ankle | toes
--------------------------------------------------------------------------------------------------
Available options for <rotation>:
    pitch | roll | yaw
--------------------------------------------------------------------------------------------------
<position> is the position the joint will end up in. It is specified in Radians away from the 
robot's default position.
*/`);

        editorConfig.setTheme('vs-dark');
        editorConfig.setUseLanguageClient(true);
        editorConfig.setUseWebSocket(false);


        const workerURL = new URL('../../public/rml-server-worker.js', import.meta.url);
        console.log(workerURL.href);

        const lsWorker = new Worker(workerURL.href, {
            type: 'classic',
            name: 'LS'
        });
        client.setWorker(lsWorker);

        client.startEditor(document.getElementById('monaco-editor-root')!);

        window.addEventListener('resize', () => client.updateLayout());
        window.client = client;

    }, [])

    
    return (
        <></>
    );
}

export default CodeEditor;
