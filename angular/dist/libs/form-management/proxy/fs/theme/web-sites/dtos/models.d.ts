import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';
export interface MetaData {
    webSiteDefinitionPrimaryKeyDto: WebSiteDefinitionPrimaryKeyDto;
    webSiteDefinitionDto: WebSiteDefinitionDto;
    webSiteDefinitionCreateDto: WebSiteDefinitionCreateDto;
    webSiteDefinitionUpdateDto: WebSiteDefinitionUpdateDto;
    webSiteDefinitionGetListDto: WebSiteDefinitionGetListDto;
    webSiteDefinitionWithDetailsDto: WebSiteDefinitionWithDetailsDto;
}
export interface WebSiteDefinitionCreateDto {
    no?: string;
    displayName?: string;
    description?: string;
    logoFileId?: string;
    title?: string;
    faviconFileId?: string;
    count: number;
    copyright?: string;
}
export interface WebSiteDefinitionDto extends AuditedEntityDto<string> {
    no?: string;
    displayName?: string;
    description?: string;
    logoFileId?: string;
    title?: string;
    faviconFileId?: string;
    count: number;
    copyright?: string;
}
export interface WebSiteDefinitionGetListDto extends SearchResultRequestDto {
}
export interface WebSiteDefinitionPrimaryKeyDto extends EntityDto<string> {
}
export interface WebSiteDefinitionUpdateDto {
    no?: string;
    displayName?: string;
    description?: string;
    logoFileId?: string;
    title?: string;
    faviconFileId?: string;
    count: number;
    copyright?: string;
}
export interface WebSiteDefinitionWithDetailsDto extends WebSiteDefinitionDto {
}
