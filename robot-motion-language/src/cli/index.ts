import chalk from 'chalk';
import { Command } from 'commander';
import { Model } from '../language-server/generated/ast';
import { RobotMotionLanguageLanguageMetaData } from '../language-server/generated/module';
import { createRobotMotionLanguageServices } from '../language-server/robot-motion-language-module';
import { extractAstNode, extractDocument } from './cli-util';
import { generateCommands } from '../generator/generator';
import { NodeFileSystem } from 'langium/node';
import { extractDestinationAndName } from './cli-util';
import path from 'path';
import fs from 'fs';

export const generateAction = async (fileName: string, opts: GenerateOptions): Promise<void> => {
    const services = createRobotMotionLanguageServices(NodeFileSystem).RobotMotionLanguage;
    const model = await extractAstNode<Model>(fileName, services);

    // invoke generator to get commands
    const cmds = generateCommands(model);

    // handle file related functionality here now
    const data = extractDestinationAndName(fileName, opts.destination);
    const generatedFilePath = `${path.join(data.destination, data.name)}.json`;
    if (!fs.existsSync(data.destination)) {
        fs.mkdirSync(data.destination, { recursive: true });
    }
    fs.writeFileSync(generatedFilePath, JSON.stringify(cmds, undefined, 2));

    console.log(chalk.green(`MiniLogo commands generated successfully: ${generatedFilePath}`));
};


export type GenerateOptions = {
    destination?: string;
}

/**
 * Parse and validate a program written in our language.
 * Verifies that no lexer or parser errors occur.
 * Implicitly also checks for validation errors while extracting the document
 *
 * @param fileName Program to validate
 */
 export const parseAndValidate = async (fileName: string): Promise<void> => {
    // retrieve the services for our language
    const services = createRobotMotionLanguageServices(NodeFileSystem).RobotMotionLanguage;
    // extract a document for our program
    const document = await extractDocument(fileName, services);
    // extract the parse result details
    const parseResult = document.parseResult;
    // verify no lexer, parser, or general diagnostic errors show up
    if (parseResult.lexerErrors.length === 0 && 
        parseResult.parserErrors.length === 0
    ) {
        console.log(chalk.green(`Parsed and validated ${fileName} successfully!`));
    } else {
        console.log(chalk.red(`Failed to parse and validate ${fileName}!`));
    }
};

export default function(): void {
    const program = new Command();

    program
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        .version(require('../../package.json').version);

    const fileExtensions = RobotMotionLanguageLanguageMetaData.fileExtensions.join(', ');

    // Add commands here
    program
        .command('parseAndValidate')
        .argument('<file>', `Source file to parse & validate (ending in ${fileExtensions})`)
        .description('Indicates where a program parses & validates successfully, but produce no output code')
        .action(parseAndValidate);

    program
        .command('generate')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .description('generates JSON code with RML commands that describes a robot motion')
        .action(generateAction);

    program.parse(process.argv);
}
