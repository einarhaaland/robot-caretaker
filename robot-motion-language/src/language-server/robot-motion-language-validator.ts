import { ValidationAcceptor, ValidationChecks, ValidationRegistry } from 'langium';
import { RobotMotionLanguageAstType, Model, Repeat } from './generated/ast';
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
            Model: validator.checkUniqueDefs, 
            Repeat: validator.checkRepeatAmountIsInt,
        };
        this.register(checks, validator);
    }
}

/**
 * Implementation of custom validations.
 */
export class RobotMotionLanguageValidator {

    checkUniqueDefs(model: Model, accept: ValidationAcceptor): void {
        // create a set of visited functions
        // and report an error when we see one we've already seen
        const reported = new Set();
        model.defs.forEach(d => {
            if (reported.has(d.name)) {
                accept('error', `Def has non-unique name '${d.name}'.`, {node: d, property: 'name'});
            }
            reported.add(d.name);
        })
    }

    checkRepeatAmountIsInt(repeat: Repeat, accept: ValidationAcceptor): void {
            if (!Number.isInteger(repeat.amount)) {
                accept('error', `Repeat amount '${repeat.amount}' should be an integer.`, {node: repeat, property: 'amount'});
            }
    }

}
