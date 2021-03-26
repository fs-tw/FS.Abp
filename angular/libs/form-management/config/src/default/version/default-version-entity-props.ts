import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';
import { of } from 'rxjs';

export const DEFAULT_VERSION_ENTITY_PROPS = EntityProp.createMany<Fs.FormManagement.Versions.Dtos.VersionDto>([
      {
        type: ePropType.String,
        name: 'no',
        displayName: 'FormManagement::FS.Version.No',
        sortable: true,
        columnWidth: 100,
      },
      {
        type: ePropType.String,
        name: 'prevversionid',
        displayName: 'FormManagement::FS.Version.PrevVersionId',
        sortable: true,
        columnWidth: 100,
      },
      {
        type: ePropType.String,
        name: 'nextversionid',
        displayName:'FormManagement::FS.Version.NextVersionId',
        sortable: true,
        columnWidth: 100,
      },
      {
        type: ePropType.String,
        name: 'documentdefinitionid',
        displayName:'FormManagement::FS.Version.DocumentDefinitionId',
        sortable: true,
        columnWidth: 100,
      },
]);
