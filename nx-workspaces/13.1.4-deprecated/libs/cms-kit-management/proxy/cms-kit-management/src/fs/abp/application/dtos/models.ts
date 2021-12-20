import type { FilterBase, PaginationFilterBase } from '../../../../auto-filterer/types/models';

export interface FilterRequestDto extends FilterBase {
}

export interface SearchResultRequestDto extends PaginationFilterBase {
  skipCount: number;
  maxResultCount: number;
  sorting?: string;
}
