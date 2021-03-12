import type { DirectoryDescriptorDto as ParentDirectoryDescriptorDto } from '../../../../../volo/file-management/directories/models';


export interface DirectoryDescriptorDto extends ParentDirectoryDescriptorDto {
  parent: DirectoryDescriptorDto;
}
