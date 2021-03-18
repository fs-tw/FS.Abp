import type { FileIconInfo } from '../files/models';
import type { AuditedEntityDto } from '@abp/ng.core';
export interface CreateDirectoryInput {
    parentId?: string;
    name: string;
}
export interface DirectoryContentDto {
    name?: string;
    isDirectory: boolean;
    id?: string;
    size: number;
    iconInfo: FileIconInfo;
}
export interface DirectoryContentRequestInput {
    filter?: string;
    sorting?: string;
    id?: string;
}
export interface DirectoryDescriptorDto extends AuditedEntityDto<string> {
    name?: string;
    parentId?: string;
}
export interface DirectoryDescriptorInfoDto {
    id?: string;
    name?: string;
    parentId?: string;
    hasChildren: boolean;
}
export interface MoveDirectoryInput {
    id?: string;
    newParentId?: string;
}
export interface RenameDirectoryInput {
    name: string;
}
