import type { CombineType } from '../enums/combine-type.enum';
import type { Sorting } from '../enums/sorting.enum';

export interface FilterBase {
  ignoreExceptions: boolean;
  combineWith: CombineType;
}

export interface OrderableFilterBase extends FilterBase {
  sortBy: Sorting;
  sort?: string;
}

export interface PaginationFilterBase extends OrderableFilterBase {
  page: number;
  perPage: number;
}
