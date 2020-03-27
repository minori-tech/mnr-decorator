export type FilterType = 'multi' | 'single' | 'date' | undefined

export interface DecoratorOptions {
    label?: string

    isFilter?: FilterType
}
