import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface MetaData {
  recordPrimaryKeyDto: RecordPrimaryKeyDto;
  recordDto: RecordDto;
  recordCreateDto: RecordCreateDto;
  recordUpdateDto: RecordUpdateDto;
  recordGetListDto: RecordGetListDto;
  recordWithDetailsDto: RecordWithDetailsDto;
  recordItemPrimaryKeyDto: RecordItemPrimaryKeyDto;
  recordItemDto: RecordItemDto;
  recordItemCreateDto: RecordItemCreateDto;
  recordItemUpdateDto: RecordItemUpdateDto;
  recordItemGetListDto: RecordItemGetListDto;
  recordItemWithDetailsDto: RecordItemWithDetailsDto;
}

export interface RecordCreateDto {
  formalId?: string;
}

export interface RecordDto extends AuditedEntityDto<string> {
  formalId?: string;
}

export interface RecordGetListDto extends SearchResultRequestDto {
}

export interface RecordItemCreateDto {
  asnwer?: string;
  recordId?: string;
  itemId?: string;
}

export interface RecordItemDto extends AuditedEntityDto<string> {
  asnwer?: string;
  recordId?: string;
  itemId?: string;
}

export interface RecordItemGetListDto extends SearchResultRequestDto {
}

export interface RecordItemPrimaryKeyDto extends EntityDto<string> {
}

export interface RecordItemUpdateDto {
  asnwer?: string;
  recordId?: string;
  itemId?: string;
}

export interface RecordItemWithDetailsDto extends RecordItemDto {
  record: RecordDto;
}

export interface RecordPrimaryKeyDto extends EntityDto<string> {
}

export interface RecordUpdateDto {
  formalId?: string;
}

export interface RecordWithDetailsDto extends RecordDto {
  recordItems: RecordItemDto[];
}
