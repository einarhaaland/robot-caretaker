import fs from 'fs';
//import { CompositeGeneratorNode, NL, processGeneratorNode } from 'langium';
import path from 'path';
//import { resourceLimits } from 'worker_threads';
import { Model, Def, Move, MultiMove, Repeat, isRepeat, isMultiMove, isMove } from '../language-server/generated/ast';
import { extractDestinationAndName } from './cli-util';

export function generateCommands(model: Model, filePath: string, destination: string | undefined): string {
    const data = extractDestinationAndName(filePath, destination);
    const generatedFilePath = `${path.join(data.destination, data.name)}.json`;

    if (!fs.existsSync(data.destination)) {
        fs.mkdirSync(data.destination, { recursive: true });
    }

    // Start generate JSON from semantic model
    console.log("MODEL:");
    console.log(model);
    const result = generateModel(model);
    console.log("GENERATED OBJECT");
    console.log(result);
    console.log("EXPANDED [OBJECT]:");
    //console.log(Object(result)["commands"][0]["move"]);

    fs.writeFileSync(generatedFilePath, JSON.stringify(result, undefined, 2));
    return generatedFilePath;
}

//
// GENERATE MODEL OBJECT

function generateModel(model: Model) : Object {
    return {'def': model.def.name, 'commands': generateDef(model.def)}
}

function generateDef(def: Def) : Object[] {
    var result: Object[] = []
    def.stmts.forEach( s => {
        if (isRepeat(s)) {
            result.push(generateRepeat(s));
        }
        else if (isMultiMove(s)) {
            result.push(generateMultiMove(s));
        }
        else if (isMove(s)) {
            result.push(generateMove(s));
        }
        else {
            throw new Error(`'${s}' is not a known statement.`)
        }
    })
    return result;
}

function generateRepeat(repeat: Repeat) : Object {
    var res: Object[] = [];
    repeat.stmtsToRepeat.forEach(s => {
        if (isMultiMove(s)) {
            res.push(generateMultiMove(s));
        }
        else if (isMove(s)) {
            res.push(generateMove(s));
        }
    })
    return {'repeat': res};
}

function generateMultiMove(multimove: MultiMove) : Object {
    var res: Object[] = [];
    multimove.compositeMoves.forEach(m => {
        res.push({'move': m})
    })
    return {'multimove': res};
}

function generateMove(move: Move) : Object {
    return {'move': move};
}