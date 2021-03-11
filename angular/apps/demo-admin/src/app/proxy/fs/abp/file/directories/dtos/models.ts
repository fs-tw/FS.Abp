import type { DirectoryDescriptorDto } from '../../../../../volo/file-management/directories/models';

export interface DirectoryDescriptorDto extends DirectoryDescriptorDto {
  parent: DirectoryDescriptorDto;
}
