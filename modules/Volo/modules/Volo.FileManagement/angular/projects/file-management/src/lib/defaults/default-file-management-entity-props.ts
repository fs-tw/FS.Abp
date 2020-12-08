import { of } from 'rxjs';
import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { DirectoryContentDto } from '../proxy/directories/models';
import { transformDirectoryContentSize } from '../utils/functions';
import { NavigatorService } from '../services/navigator.service';
import { DownloadService } from '../services/download.service';

export const DEFAULT_FILE_MANAGEMENT_DIRECTORY_CONTENT_DTO_ENTITY_PROPS = EntityProp.createMany<
  DirectoryContentDto
>([
  {
    type: ePropType.String,
    name: 'name',
    displayName: 'FileManagement::Name',
    sortable: true,
    action: (data) => {
      const navigator = data.getInjected(NavigatorService);
      const download = data.getInjected(DownloadService);
      if (data.record.isDirectory) {
        navigator.goToFolder(data.record);
      } else {
        download.downloadFile(data.record).subscribe();
      }
    },
    valueResolver: (data) => {
      const record = data.record;

      let iconTemplate;
      if (record.isDirectory) {
        iconTemplate = `<i class="fa fa-folder text-primary" aria-hidden="true"></i>`;
      } else if (record.iconInfo) {
        if (record.iconInfo.type === 0) {
          iconTemplate = `<i class="${data.record.iconInfo.icon}" aria-hidden="true"></i>`;
        } else {
          iconTemplate = `<img src="${data.record.iconInfo.icon}" />`;
        }
      }

      return of(`${iconTemplate} ${data.record.name}`);
    },
  },
  {
    type: ePropType.String,
    name: 'size',
    displayName: 'FileManagement::Size',
    sortable: true,
    columnWidth: 150,
    valueResolver: (data) => of(transformDirectoryContentSize(data.record)),
  },
]);
