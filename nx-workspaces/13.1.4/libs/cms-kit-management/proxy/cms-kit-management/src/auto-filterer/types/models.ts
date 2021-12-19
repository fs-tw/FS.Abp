import type { CombineType } from '../enums/combine-type.enum';

export interface FilterBase {
  ignoreExceptions: boolean;
  combineWith: CombineType;
}
