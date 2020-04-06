export type FilterType = "multi" | "single" | "date" | undefined;

export type Lookup = Record<number | string, string>;
export interface DecoratorOptions {
  label?: string;

  isFilter?: FilterType;

  lookup?: Lookup;
}
