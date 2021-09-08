import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface BlogQuery {
  blogSlug?: string;
  input: PagedAndSortedResultRequestDto;
}

export interface FindQuery {
  id?: string;
}

export interface RouteQuery {
  routeId?: string;
  input: PagedAndSortedResultRequestDto;
}

export interface SlugQuery {
  blogSlug?: string;
  blogPostSlug?: string;
}
