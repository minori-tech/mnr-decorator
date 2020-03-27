import { DecoratorMetadata } from './DecoratorMetadata'

/**
 * Storage all metadatas.
 */
export class MetadataStorage {
    // -------------------------------------------------------------------------
    // Private properties
    // -------------------------------------------------------------------------

    private decoratorMetadatas: DecoratorMetadata[] = []

    get hasValidationMetaData() {
        return !!this.decoratorMetadatas.length
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    /**
     * Adds a new decorator metadata.
     */
    addDecoratorMetadata(metadata: DecoratorMetadata) {
        this.decoratorMetadatas.push(metadata)
    }

    /**
     * Groups metadata by their property names.
     */
    groupByPropertyName(metadata: DecoratorMetadata[]): { [propertyName: string]: DecoratorMetadata[] } {
        const grouped: { [propertyName: string]: DecoratorMetadata[] } = {}
        metadata.forEach(metadata => {
            if (!grouped[metadata.propertyName]) grouped[metadata.propertyName] = []
            grouped[metadata.propertyName].push(metadata)
        })
        return grouped
    }

    /**
     * Gets decorator metadatas for the given object.
     */
    getTargetDecoratorMetadatas(targetSchema: Function | string): DecoratorMetadata[] {
        return this.decoratorMetadatas.filter(meta => meta.target === targetSchema || meta.targetName === targetSchema)
    }
}
