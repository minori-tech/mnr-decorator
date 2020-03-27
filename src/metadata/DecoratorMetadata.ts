import { DecoratorOptions } from '../DecoratorOptions'
import { DecoratorMetadataArgs } from './DecoratorMetadataArgs'

/**
 * This metadata contains decorator information.
 */
export class DecoratorMetadata {
    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    type: string

    target: Function | string

    targetName: string

    propertyName: string

    options?: DecoratorOptions

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(args: DecoratorMetadataArgs) {
        this.type = args.type
        this.target = args.target
        this.targetName = args.targetName
        this.propertyName = args.propertyName
        this.options = args.options
    }
}
