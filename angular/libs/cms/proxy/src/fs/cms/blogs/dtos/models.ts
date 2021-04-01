import type { ResourceDto } from '../../core/dtos/models';
import type { AuditedEntityDto, EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface BlogCreateDto {
  no?: string;
  displayName?: string;
  description?: string;
  sequence: number;
  code?: string;
  level: number;
  parentId?: string;
  disable: boolean;
  static: boolean;
  images: ResourceDto[];
}

export interface BlogDto extends AuditedEntityDto<string> {
  no?: string;
  displayName?: string;
  description?: string;
  sequence: number;
  code?: string;
  level: number;
  parentId?: string;
  disable: boolean;
  static: boolean;
  images: ResourceDto[];
}

export interface BlogGetListDto extends SearchResultRequestDto {
}

export interface BlogPrimaryKeyDto extends EntityDto<string> {
}

export interface BlogUpdateDto {
  no?: string;
  displayName?: string;
  description?: string;
  sequence: number;
  code?: string;
  level: number;
  parentId?: string;
  disable: boolean;
  static: boolean;
  images: ResourceDto[];
}

export interface BlogWithDetailsDto extends BlogDto {
  children: BlogDto[];
  parent: BlogDto;
}

export interface GetBlogsInput extends PagedAndSortedResultRequestDto {
  keyword?: string;
}

export interface MetaData {
  blogPrimaryKeyDto: BlogPrimaryKeyDto;
  blogDto: BlogDto;
  blogCreateDto: BlogCreateDto;
  blogUpdateDto: BlogUpdateDto;
  blogGetListDto: BlogGetListDto;
  blogWithDetailsDto: BlogWithDetailsDto;
}
