import type { AuditedEntityDto } from '@abp/ng.core';
import type { RepeatType } from '../repeat-type.enum';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface BookDto extends AuditedEntityDto<string> {
  name?: string;
  repeatType: RepeatType;
  repeatInterval?: string;
  startTime?: string;
  endTime?: string;
  customerId?: string;
  areaId?: string;
  amount: number;
}

export interface BookGetListDto extends SearchResultRequestDto {
}

export interface BookWithDetailsDto extends BookDto {
}
