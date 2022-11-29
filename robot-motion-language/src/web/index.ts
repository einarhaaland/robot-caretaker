import { AstNode, LangiumServices } from "langium";
import { URI } from "vscode-uri";

import { EmptyFileSystem } from "langium";
import { createRobotMotionLanguageServices } from '../language-server/robot-motion-language-module';
import { Model } from "../language-server/generated/ast";
import { generateCommands } from '../generator/generator';

/**
 * Parses a Robot Motion Language program & generates output as an Object
 * @param rmlProgram robot motion language program to parse
 * @returns Generated output from this MiniLogo program
 */
export async function parseAndGenerate (rmlProgram: string): Promise<Object> {
    const services = createRobotMotionLanguageServices(EmptyFileSystem).RobotMotionLanguage;
    const model = await extractAstNodeFromString<Model>(rmlProgram, services);
    // generate rml commands ready to json stringify and send
    const cmds = generateCommands(model);
    return Promise.resolve(cmds);
}


/**
 * Extracts an AST node from a virtual document, represented as a string
 * @param content Content to create virtual document from
 * @param services For constructing & building a virtual document
 * @returns A promise for the parsed result of the document
 */
 async function extractAstNodeFromString<T extends AstNode>(content: string, services: LangiumServices): Promise<T> {
    // create a document from a string instead of a file
    const doc = services.shared.workspace.LangiumDocumentFactory.fromString(content, URI.parse('memory://robot-motion-language.document'));
    // proceed with build & validation
    await services.shared.workspace.DocumentBuilder.build([doc], { validationChecks: 'all' });
    // get the parse result (root of our AST)
    return doc.parseResult?.value as T;
}