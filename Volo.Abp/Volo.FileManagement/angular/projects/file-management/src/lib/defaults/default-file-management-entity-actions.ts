import { EntityAction, ActionData } from '@abp/ng.theme.shared/extensions';

import { eFileManagementPolicyNames } from '@volo/abp.ng.file-management/config';

import { DirectoryContentDto } from '../proxy/directories/models';
// tslint:disable-next-line: max-line-length
import { FileManagementFolderContentComponent } from '../components/file-management-folder-content/file-management-folder-content.component';

function isDirectory(data: ActionData<DirectoryContentDto>) {
  return data.record.isDirectory;
}

function isFile(data) {
  return !isDirectory(data);
}

export const DEFAULT_FILE_MANAGEMENT_DIRECTORY_CONTENT_DTO_ENTITY_ACTIONS = EntityAction.createMany<
  DirectoryContentDto
>([
  /* DIRECTORY ACTIONS */
  {
    text: 'FileManagement::Open',
    action: (data) => {
      const component = data.getInjected(FileManagementFolderContentComponent);
      component.openFolder(data.record);
    },
    visible: isDirectory,
  },
  {
    text: 'FileManagement::Rename',
    action: (data) => {
      const component = data.getInjected(FileManagementFolderContentComponent);
      component.renameFolder(data.record);
    },
    permission: eFileManagementPolicyNames.DirectoryDescriptorUpdate,
    visible: isDirectory,
  },
  {
    text: 'AbpUi::Delete',
    action: (data) => {
      const component = data.getInjected(FileManagementFolderContentComponent);
      component.deleteFolder(data.record);
    },
    permission: eFileManagementPolicyNames.DirectoryDescriptorDelete,
    visible: isDirectory,
  },
  /* !DIRECTORY ACTIONS */
  /* FILE ACTIONS */

  {
    text: 'FileManagement::Download',
    action: (data) => {
      const component = data.getInjected(FileManagementFolderContentComponent);
      component.downloadFile(data.record);
    },
    visible: isFile,
  },
  {
    text: 'FileManagement::Rename',
    action: (data) => {
      const component = data.getInjected(FileManagementFolderContentComponent);
      component.renameFile(data.record);
    },
    permission: eFileManagementPolicyNames.FileDescriptorUpdate,
    visible: isFile,
  },
  {
    text: 'FileManagement::Move',
    action: (data) => {
      const component = data.getInjected(FileManagementFolderContentComponent);
      component.moveFile(data.record);
    },
    permission: eFileManagementPolicyNames.FileDescriptorUpdate,
    visible: isFile,
  },
  {
    text: 'AbpUi::Delete',
    action: (data) => {
      const component = data.getInjected(FileManagementFolderContentComponent);
      component.deleteFile(data.record);
    },
    permission: eFileManagementPolicyNames.FileDescriptorDelete,
    visible: isFile,
  },
]);
