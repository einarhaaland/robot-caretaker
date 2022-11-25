import { Model, Def, Move, MultiMove, Repeat, isRepeat, isMultiMove, isMove } from '../language-server/generated/ast';

/**
 * Generates simple drawing commands from a MiniLogo Model
 * @param model Model to generate commmands from
 * @returns Generated commands that captures the program's drawing intent
 */
export function generateCommands(model: Model): Object {
    return generateModel(model);
}

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
    return {'repeat': res, 'amount': repeat.amount};
}

function generateMultiMove(multimove: MultiMove) : Object {
    var res: Object[] = [];
    multimove.compositeMoves.forEach(m => {
        res.push(generateMove(m));
    })
    return {'multimove': res};
}

function generateMove(move: Move) : Object {
    return {'move': {'side': move.side, 'joint': move.joint, 'rotation': move.rotation, 'position': move.position}};
}