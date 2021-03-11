import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';
export interface MetaData {
    tagPrimaryKeyDto: TagPrimaryKeyDto;
    tagDto: TagDto;
    tagCreateDto: TagCreateDto;
    tagUpdateDto: TagUpdateDto;
    tagGetListDto: TagGetListDto;
    tagWithDetailsDto: TagWithDetailsDto;
}
export interface TagCreateDto {
    no?: string;
    displayName?: string;
    description?: string;
    code?: string;
    level: number;
    parentId?: string;
    disable: boolean;
}
export interface TagDto extends AuditedEntityDto<string> {
    no?: string;
    displayName?: string;
    description?: string;
    code?: string;
    level: number;
    parentId?: string;
    disable: boolean;
}
export interface TagGetListDto extends SearchResultRequestDto {
}
export interface TagPrimaryKeyDto extends EntityDto<string> {
}
export interface TagUpdateDto {
    no?: string;
    displayName?: string;
    description?: string;
    code?: string;
    level: number;
    parentId?: string;
    disable: boolean;
}
export interface TagWithDetailsDto extends TagDto {
    children: TagDto[];
    parent: TagDto;
}
//# sourceMappingURL=models.d.ts.map