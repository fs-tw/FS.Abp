import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface SearchResultRequestDto extends PagedAndSortedResultRequestDto {
  fields: string;
  value: string;
}
