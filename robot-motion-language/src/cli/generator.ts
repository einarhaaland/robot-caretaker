import fs from 'fs';
//import { CompositeGeneratorNode, NL, processGeneratorNode } from 'langium';
import path from 'path';
//import { resourceLimits } from 'worker_threads';
import { Model, Def, Stmt, Move, MultiMove, Repeat, isRepeat, isMultiMove, isMove } from '../language-server/generated/ast';
import { extractDestinationAndName } from './cli-util';

export function generateCommands(model: Model, filePath: string, destination: string | undefined): string {
    const data = extractDestinationAndName(filePath, destination);
    const generatedFilePath = `${path.join(data.destination, data.name)}.json`;

    if (!fs.existsSync(data.destination)) {
        fs.mkdirSync(data.destination, { recursive: true });
    }

    // Generate JSON
    const result = generateModel(model);
    //

    fs.writeFileSync(generatedFilePath, JSON.stringify(result, undefined, 2)); // json string result, all values included, 2 whitespace for readability
    return generatedFilePath;
}


// GENERATE JSON
function generateModel(model: Model): Object {
    var result: Object[] = [];
    model.defs.forEach( d => {
        result.push(generateDefs(d));
    })
    return {'model': result};
}

function generateDefs(def: Def) : Object {
    var result: Object[] = [];
    def.stmt.forEach( s => {
        result.push(generateStmt(s));
    })
    return {'name': def.name, 'def': result};
}

function generateStmt(stmt: Stmt) : Object {
    if (isRepeat(stmt)) {
        return generateRepeat(stmt);
    }
    else if (isMultiMove(stmt)) {
        return generateMultiMove(stmt);
    }
    else if (isMove(stmt)) {
        return generateMove(stmt);
    }
    return {'error': 'stmt does not match any statement, maybe validation is insufficient?'}
}

function generateRepeat(repeat: Repeat) : {repeat: Object[], amount: number} {
    var result: Object[] = [];

    repeat.stmt.forEach( s => {
        result.push(generateStmt(s));
    })

    return {'repeat': result, 'amount': repeat.amount};
}

function generateMultiMove(multimove: MultiMove) : {multimove: Object[]} {
    var result: Object[] = [];

    multimove.compositemoves.forEach( m => {
        result.push(generateMove(m));
    })
        
    return {'multimove': result};
}

function generateMove(move: Move): {move: Move} {
    return {'move': move};
}
