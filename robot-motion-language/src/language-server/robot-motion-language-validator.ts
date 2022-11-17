import { ValidationAcceptor, ValidationChecks, ValidationRegistry } from 'langium';
import { RobotMotionLanguageAstType, Repeat } from './generated/ast';
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
        };
        this.register(checks, validator);
    }
}

/**
 * Implementation of custom validations.
 */
export class RobotMotionLanguageValidator {
    checkRepeatAmountIsInt(repeat: Repeat, accept: ValidationAcceptor): void {
            if (!Number.isInteger(repeat.amount)) {
                accept('error', `Repeat amount '${repeat.amount}' should be an integer.`, {node: repeat, property: 'amount'});
            }
    }

}
