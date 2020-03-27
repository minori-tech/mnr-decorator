import { DecoratorMetadataArgs } from "./metadata/DecoratorMetadataArgs";
import { DecoratorTypes } from "./types/DecoratorTypes";
import { DecoratorOptions } from "./DecoratorOptions";
import { getFromContainer } from "./container";
import { MetadataStorage } from "./metadata/MetadataStorage";
import { DecoratorMetadata } from "./metadata/DecoratorMetadata";

export function ColumnSpec(options?: DecoratorOptions) {
  return function(object: any, propertyName: string) {
    const args: DecoratorMetadataArgs = {
      type: DecoratorTypes.TABLE_COLUMN,
      target: object.constructor,
      targetName: object.constructor.name,
      propertyName: propertyName,
      options: options
    };
    getFromContainer(MetadataStorage).addDecoratorMetadata(
      new DecoratorMetadata(args)
    );
  };
}
