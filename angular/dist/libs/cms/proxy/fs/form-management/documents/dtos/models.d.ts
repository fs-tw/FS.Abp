import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';
export interface DocumentDefinitionCreateDto {
    no?: string;
    displayName?: string;
    currentVersionId?: string;
}
export interface DocumentDefinitionDto extends AuditedEntityDto<string> {
    no?: string;
    displayName?: string;
    currentVersionId?: string;
}
export interface DocumentDefinitionGetListDto extends SearchResultRequestDto {
}
export interface DocumentDefinitionPrimaryKeyDto extends EntityDto<string> {
}
export interface DocumentDefinitionUpdateDto {
    no?: string;
    displayName?: string;
    currentVersionId?: string;
}
export interface DocumentDefinitionWithDetailsDto extends DocumentDefinitionDto {
    currentVersion: VersionDto;
}
export interface MetaData {
    documentDefinitionPrimaryKeyDto: DocumentDefinitionPrimaryKeyDto;
    documentDefinitionDto: DocumentDefinitionDto;
    documentDefinitionCreateDto: DocumentDefinitionCreateDto;
    documentDefinitionUpdateDto: DocumentDefinitionUpdateDto;
    documentDefinitionGetListDto: DocumentDefinitionGetListDto;
    documentDefinitionWithDetailsDto: DocumentDefinitionWithDetailsDto;
    versionPrimaryKeyDto: VersionPrimaryKeyDto;
    versionDto: VersionDto;
    versionCreateDto: VersionCreateDto;
    versionUpdateDto: VersionUpdateDto;
    versionGetListDto: VersionGetListDto;
    versionWithDetailsDto: VersionWithDetailsDto;
}
export interface VersionCreateDto {
    no?: string;
    prevVersionId?: string;
    nextVersionId?: string;
    documentDefinitionId?: string;
}
export interface VersionDto extends AuditedEntityDto<string> {
    no?: string;
    prevVersionId?: string;
    nextVersionId?: string;
    documentDefinitionId?: string;
}
export interface VersionGetListDto extends SearchResultRequestDto {
}
export interface VersionPrimaryKeyDto extends EntityDto<string> {
}
export interface VersionUpdateDto {
    no?: string;
    prevVersionId?: string;
    nextVersionId?: string;
    documentDefinitionId?: string;
}
export interface VersionWithDetailsDto extends VersionDto {
}
