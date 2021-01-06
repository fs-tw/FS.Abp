import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';
export interface ProjectCreateDto {
    employeeId: string;
    no: string;
    projectTypeCodeId: string;
    projectTypeRemark: string;
    isStar: boolean;
    projectStateRemark: string;
    questionAndProgress: string;
    projectStateCodeId: string;
}
export interface ProjectDto extends AuditedEntityDto<string> {
    employeeId: string;
    no: string;
    projectTypeCodeId: string;
    projectTypeRemark: string;
    isStar: boolean;
    projectStateRemark: string;
    questionAndProgress: string;
    projectStateCodeId: string;
}
export interface ProjectGetListDto extends SearchResultRequestDto {
}
export interface ProjectPrimaryKeyDto extends EntityDto<string> {
}
export interface ProjectUpdateDto {
    employeeId: string;
    no: string;
    projectTypeCodeId: string;
    projectTypeRemark: string;
    isStar: boolean;
    projectStateRemark: string;
    questionAndProgress: string;
    projectStateCodeId: string;
}
export interface ProjectWithDetailsDto extends ProjectDto {
}
