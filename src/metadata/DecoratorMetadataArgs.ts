import { DecoratorOptions } from '../DecoratorOptions'

export interface DecoratorMetadataArgs {
    type: string

    target: Function | string

    targetName: string

    propertyName: string

    options?: DecoratorOptions
}
