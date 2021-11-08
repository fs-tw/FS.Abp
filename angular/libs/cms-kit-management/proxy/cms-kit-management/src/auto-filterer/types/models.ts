import type { CombineType } from '../enums/combine-type.enum';
import type { Sorting } from '../enums/sorting.enum';

export interface FilterBase {
  combineWith: CombineType;
  ignoreExceptions: boolean;
}

export interface OrderableFilterBase extends FilterBase {
  sort?: string;
  sortBy: Sorting;
}

export interface PaginationFilterBase extends OrderableFilterBase {
  page: number;
  perPage: number;
}
