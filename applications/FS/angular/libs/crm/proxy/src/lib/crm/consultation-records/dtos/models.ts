import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface ConsultationRecordCreateDto {
  progress: string;
  consultant: string;
  phone: string;
  address: string;
  counselingDate: string;
  counselingStatus: string;
  hasReturnPhoto: boolean;
  hasReturnForm: boolean;
  hasReturnSatisfactionSurvey: boolean;
  hasReturnReceipt: boolean;
  cost: number;
  remittanceDate?: string;
  hours: number;
  customerId: string;
  projectId: string;
}

export interface ConsultationRecordDto extends AuditedEntityDto<string> {
  progress: string;
  consultant: string;
  phone: string;
  address: string;
  counselingDate: string;
  counselingStatus: string;
  hasReturnPhoto: boolean;
  hasReturnForm: boolean;
  hasReturnSatisfactionSurvey: boolean;
  hasReturnReceipt: boolean;
  cost: number;
  remittanceDate?: string;
  hours: number;
  customerId: string;
  projectId: string;
}

export interface ConsultationRecordGetListDto extends SearchResultRequestDto {
}

export interface ConsultationRecordPrimaryKeyDto extends EntityDto<string> {
}

export interface ConsultationRecordUpdateDto {
  progress: string;
  consultant: string;
  phone: string;
  address: string;
  counselingDate: string;
  counselingStatus: string;
  hasReturnPhoto: boolean;
  hasReturnForm: boolean;
  hasReturnSatisfactionSurvey: boolean;
  hasReturnReceipt: boolean;
  cost: number;
  remittanceDate?: string;
  hours: number;
  customerId: string;
  projectId: string;
}

export interface ConsultationRecordWithDetailsDto extends ConsultationRecordDto {
}
