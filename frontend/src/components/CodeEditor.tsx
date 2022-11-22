import React from 'react';
import { MonacoEditorLanguageClientWrapper } from 'monaco-editor-wrapper';
import { buildWorkerDefinition } from 'monaco-editor-workers';


function CodeEditor() {
    console.log(`HERHEHR: ${document.getElementById('monaco-editor-root')}`);

    buildWorkerDefinition('../../node_modules/monaco-editor-workers/dist/', new URL('', window.location.href).href, false); //might need to change url

    MonacoEditorLanguageClientWrapper.addMonacoStyles('monaco-editor-styles');
    MonacoEditorLanguageClientWrapper.addCodiconTtf();

    const client = new MonacoEditorLanguageClientWrapper('42');
    const editorConfig = client.getEditorConfig();
    editorConfig.setMainLanguageId('robotmotionlanguage'); // is this id correct?

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

    editorConfig.setMainCode(`
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
    `);

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

    client.startEditor(ReactDOM.findDOMNode(this).parentElement)); // needs adaption to react

    window.addEventListener('resize', () => client.updateLayout());

    
    return (
        <></>
    );
}

export default CodeEditor;
