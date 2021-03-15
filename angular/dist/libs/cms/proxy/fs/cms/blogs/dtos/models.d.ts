import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';
export interface BlogCreateDto {
    no?: string;
    displayName?: string;
    description?: string;
    code?: string;
    level: number;
    parentId?: string;
    disable: boolean;
    listStyle?: string;
    sequence: number;
    url?: string;
    iconUrl?: string;
}
export interface BlogDto extends AuditedEntityDto<string> {
    no?: string;
    displayName?: string;
    description?: string;
    code?: string;
    level: number;
    parentId?: string;
    disable: boolean;
    listStyle?: string;
    sequence: number;
    url?: string;
    iconUrl?: string;
}
export interface BlogGetListDto extends SearchResultRequestDto {
}
export interface BlogPrimaryKeyDto extends EntityDto<string> {
}
export interface BlogUpdateDto {
    no?: string;
    displayName?: string;
    description?: string;
    code?: string;
    level: number;
    parentId?: string;
    disable: boolean;
    listStyle?: string;
    sequence: number;
    url?: string;
    iconUrl?: string;
}
export interface BlogWithDetailsDto extends BlogDto {
    children: BlogDto[];
    parent: BlogDto;
}
export interface MetaData {
    blogPrimaryKeyDto: BlogPrimaryKeyDto;
    blogDto: BlogDto;
    blogCreateDto: BlogCreateDto;
    blogUpdateDto: BlogUpdateDto;
    blogGetListDto: BlogGetListDto;
    blogWithDetailsDto: BlogWithDetailsDto;
}
