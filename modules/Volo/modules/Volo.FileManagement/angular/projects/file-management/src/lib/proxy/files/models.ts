import type { AuditedEntityDto } from '@abp/ng.core';
import type { FileIconType } from './file-icon-type.enum';

export interface CreateFileInput {
  directoryId?: string;
  name: string;
  mimeType: string;
  content: number[];
}

export interface FileDescriptorDto extends AuditedEntityDto<string> {
  directoryId?: string;
  name: string;
  mimeType: string;
  size: number;
}

export interface FileIconInfo {
  icon: string;
  type: FileIconType;
}

export interface FileUploadPreInfoDto {
  fileName: string;
  doesExist: boolean;
  hasValidName: boolean;
}

export interface FileUploadPreInfoRequest {
  directoryId?: string;
  fileName: string;
  size: number;
}

export interface MoveFileInput {
  id: string;
  newDirectoryId?: string;
}

export interface RenameFileInput {
  name: string;
}
