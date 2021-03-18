import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';
export interface FormalCreateDto {
    no?: string;
    displayName?: string;
    versionId?: string;
}
export interface FormalDto extends AuditedEntityDto<string> {
    no?: string;
    displayName?: string;
    versionId?: string;
}
export interface FormalGetListDto extends SearchResultRequestDto {
}
export interface FormalPrimaryKeyDto extends EntityDto<string> {
}
export interface FormalUpdateDto {
    no?: string;
    displayName?: string;
    versionId?: string;
}
export interface FormalWithDetailsDto extends FormalDto {
    groups: GroupDto[];
}
export interface GroupCreateDto {
    code?: string;
    parentId?: string;
    level: number;
    displayName?: string;
    formalId?: string;
}
export interface GroupDto extends AuditedEntityDto<string> {
    code?: string;
    parentId?: string;
    level: number;
    displayName?: string;
    formalId?: string;
}
export interface GroupGetListDto extends SearchResultRequestDto {
}
export interface GroupPrimaryKeyDto extends EntityDto<string> {
}
export interface GroupUpdateDto {
    code?: string;
    parentId?: string;
    level: number;
    displayName?: string;
    formalId?: string;
}
export interface GroupWithDetailsDto extends GroupDto {
    children: GroupDto[];
    parent: GroupDto;
    formal: FormalDto;
    items: ItemDto[];
}
export interface ItemCreateDto {
    no?: string;
    question?: string;
    groupId?: string;
    sequence: number;
}
export interface ItemDto extends AuditedEntityDto<string> {
    no?: string;
    question?: string;
    groupId?: string;
    sequence: number;
}
export interface ItemGetListDto extends SearchResultRequestDto {
}
export interface ItemPrimaryKeyDto extends EntityDto<string> {
}
export interface ItemUpdateDto {
    no?: string;
    question?: string;
    groupId?: string;
    sequence: number;
}
export interface ItemWithDetailsDto extends ItemDto {
    group: GroupDto;
}
export interface MetaData {
    formalPrimaryKeyDto: FormalPrimaryKeyDto;
    formalDto: FormalDto;
    formalCreateDto: FormalCreateDto;
    formalUpdateDto: FormalUpdateDto;
    formalGetListDto: FormalGetListDto;
    formalWithDetailsDto: FormalWithDetailsDto;
    groupPrimaryKeyDto: GroupPrimaryKeyDto;
    groupDto: GroupDto;
    groupCreateDto: GroupCreateDto;
    groupUpdateDto: GroupUpdateDto;
    groupGetListDto: GroupGetListDto;
    groupWithDetailsDto: GroupWithDetailsDto;
    itemPrimaryKeyDto: ItemPrimaryKeyDto;
    itemDto: ItemDto;
    itemCreateDto: ItemCreateDto;
    itemUpdateDto: ItemUpdateDto;
    itemGetListDto: ItemGetListDto;
    itemWithDetailsDto: ItemWithDetailsDto;
}
