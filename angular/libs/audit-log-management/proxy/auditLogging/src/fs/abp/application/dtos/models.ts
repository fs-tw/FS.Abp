import type { PaginationFilterBase } from '../../../../auto-filterer/types/models';
import type { CombineType } from '../../../../auto-filterer/enums/combine-type.enum';
import type { Sorting } from '../../../../auto-filterer/enums/sorting.enum';

export interface SearchResultRequestDto extends PaginationFilterBase {
  skipCount: number;
  maxResultCount: number;
  page: number;
  perPage: number;
  combineWith: CombineType;
  sort?: string;
  sortBy: Sorting;
  sorting?: string;
}
