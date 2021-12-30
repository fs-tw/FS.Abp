import type { CombineType } from '../enums/combine-type.enum';

export interface FilterBase {
  ignoreExceptions: boolean;
  combineWith: CombineType;
}

export interface Range<T> {
  min?: T;
  max?: T;
}
