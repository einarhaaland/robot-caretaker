import { startLanguageServer, EmptyFileSystem } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, createConnection } from 'vscode-languageserver/browser';
import { createRobotMotionLanguageServices } from './robot-motion-language-module';

declare const self: DedicatedWorkerGlobalScope;

/* browser specific setup code */
const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

// Inject the shared services and language-specific services
const { shared } = createRobotMotionLanguageServices({ connection, ...EmptyFileSystem });

// Start the language server with the shared services
startLanguageServer(shared);