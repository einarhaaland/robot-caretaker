import { ValidationAcceptor, ValidationChecks, ValidationRegistry } from 'langium';
import { RobotMotionLanguageAstType, Repeat, Move } from './generated/ast';
import type { RobotMotionLanguageServices } from './robot-motion-language-module';

/**
 * Registry for validation checks.
 */
export class RobotMotionLanguageValidationRegistry extends ValidationRegistry {
    constructor(services: RobotMotionLanguageServices) {
        super(services);
        const validator = services.validation.RobotMotionLanguageValidator;
        const checks: ValidationChecks<RobotMotionLanguageAstType> = {
            // Add checks here 
            Repeat: validator.checkRepeatAmountIsInt,
            Move: validator.checkMove,
        };
        this.register(checks, validator);
    }
}

/**
 * Implementation of custom validations.
 */
export class RobotMotionLanguageValidator {
    //CHECK REPEAT
    checkRepeatAmountIsInt(repeat: Repeat, accept: ValidationAcceptor): void {
            if (!Number.isInteger(repeat.amount)) {
                accept('error', `Repeat amount '${repeat.amount}' should be an integer.`, {node: repeat, property: 'amount'});
            }
    }

    //CHECK MOVE
    checkMove(move: Move, accept: ValidationAcceptor) : void {
        this.checkMoveSideArg(move, accept);
        this.checkMoveRotationArg(move, accept);
    }
    checkMoveSideArg(move: Move, accept: ValidationAcceptor): void {
        if (move.joint === 'head' || move.joint === 'torso') {
            if (move.side){
                accept('error', `Side '${move.side}' is unnecessary on joint '${move.joint}'`, {node: move, property: 'joint'});
            }
        }
        else {
            if (!move.side) {
                accept('error', `Side 'left' or 'right' is necessary on joint '${move.joint}'`, {node: move, property: 'joint'});
            }
        }
    }
    checkMoveRotationArg(move: Move, accept: ValidationAcceptor): void {
        if (move.joint === 'knee') {
            if (move.rotation){
                accept('error', `Rotation '${move.rotation}' is unnecessary on joint '${move.joint}'`, {node: move, property: 'rotation'});
            }
        }
        else {
            if (!move.rotation) {
                accept('error', `Rotation 'pitch' or 'roll' or 'yaw' is necessary on joint '${move.joint}'`, {node: move, property: 'rotation'});
            }
        }
    }
}
