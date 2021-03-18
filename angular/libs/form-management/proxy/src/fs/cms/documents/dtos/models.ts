import type { CmsFileFieldDto, CmsImageFieldDto } from '../../core/dtos/models';
import type { EntityDto, FullAuditedEntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface DocumentCreateDto {
  content?: string;
  files: CmsFileFieldDto[];
  documentDefinitionId?: string;
  code?: string;
  parentId?: string;
  displayName?: string;
  level: number;
}

export interface DocumentDefinitionCreateDto {
  images: CmsImageFieldDto[];
  title?: string;
  url?: string;
}

export interface DocumentDefinitionDto extends FullAuditedEntityDto<string> {
  images: CmsImageFieldDto[];
  title?: string;
  url?: string;
}

export interface DocumentDefinitionGetListDto extends SearchResultRequestDto {
}

export interface DocumentDefinitionPrimaryKeyDto extends EntityDto<string> {
}

export interface DocumentDefinitionUpdateDto {
  images: CmsImageFieldDto[];
  title?: string;
  url?: string;
}

export interface DocumentDefinitionWithDetailsDto extends DocumentDefinitionDto {
  documents: DocumentDto[];
}

export interface DocumentDto extends FullAuditedEntityDto<string> {
  content?: string;
  files: CmsFileFieldDto[];
  documentDefinitionId?: string;
  code?: string;
  parentId?: string;
  displayName?: string;
  level: number;
}

export interface DocumentGetListDto extends SearchResultRequestDto {
}

export interface DocumentPrimaryKeyDto extends EntityDto<string> {
}

export interface DocumentUpdateDto {
  content?: string;
  files: CmsFileFieldDto[];
  documentDefinitionId?: string;
  code?: string;
  parentId?: string;
  displayName?: string;
  level: number;
}

export interface DocumentWithDetailsDto extends DocumentDto {
  documentDefinition: DocumentDefinitionDto;
  children: DocumentDto[];
  parent: DocumentDto;
}

export interface MetaData {
  documentDefinitionPrimaryKeyDto: DocumentDefinitionPrimaryKeyDto;
  documentDefinitionDto: DocumentDefinitionDto;
  documentDefinitionCreateDto: DocumentDefinitionCreateDto;
  documentDefinitionUpdateDto: DocumentDefinitionUpdateDto;
  documentDefinitionGetListDto: DocumentDefinitionGetListDto;
  documentDefinitionWithDetailsDto: DocumentDefinitionWithDetailsDto;
  documentPrimaryKeyDto: DocumentPrimaryKeyDto;
  documentDto: DocumentDto;
  documentCreateDto: DocumentCreateDto;
  documentUpdateDto: DocumentUpdateDto;
  documentGetListDto: DocumentGetListDto;
  documentWithDetailsDto: DocumentWithDetailsDto;
}
