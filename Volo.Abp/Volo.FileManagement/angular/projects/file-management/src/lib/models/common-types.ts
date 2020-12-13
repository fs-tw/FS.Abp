import {
  DirectoryContentDto,
  DirectoryContentRequestInput,
} from '../proxy/directories/models';

export type FolderInfo = Pick<DirectoryContentDto, 'name' | 'id'>;
export type FileInfo = FolderInfo;
