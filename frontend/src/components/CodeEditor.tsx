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

        editorConfig.setMainCode(`/* 
This green text will teach you the basics of RML (Robot Motion Language)!
    (If you are familiar with the language, this can safely be deleted.)

Below is an example of a MOTION defined in RML. Modify it or replace it with your own:
*/

define wave
    move right shoulder pitch to -1.5
    repeat 3
        multimove
            move right shoulder roll to 0.3
            move right shoulder roll to -0.5
        end
    end
    move right shoulder roll to 0.0
    move right shoulder pitch to 1.5
end

/*
Keywords:
        Keywords in RML includes "define", "move", "multimove" and "repeat".
        * define: "define wave" will define a motion called "wave".
        * repeat: "repeat 3" anything between "repeat" and its "end" will be performed three times
        * multimove: "multimove" moves between "multimove" and its "end" will be performed
                        simultainously rather than in sequence.
        * move: "move right shoulder pitch to 0.5" joint will move to position 0.5 
        * //: is used for single-line comments. Anything you type after will be ignored by RML.
Usage:
        define <your_motion_name_here> end
        repeat <amount> <move(s) and/or multimove(s)> end
        multimove <moves> end
        move <right/left> <joint> <pitch/roll/yaw> to <position>

For more details, see: https://github.com/einarhaaland/robot-caretaker#RML
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
