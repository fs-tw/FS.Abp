import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';
import { of } from 'rxjs';

export const DEFAULT_VERSIONDEFINITION_ENTITY_PROPS = EntityProp.createMany<Fs.FormManagement.Versions.Dtos.VersionDefinitionDto>([

      {
        type: ePropType.String,
        name: 'currentVersionId',
        displayName:'FormManagement::FS.VersionDefinition.CurrentVersionId',
        sortable: true,
        columnWidth: 100,
      },
       {
        type: ePropType.String,
        name: 'entityType',
        displayName: 'FormManagement::FS.VersionDefinition.EntityType',
        sortable: true,
        columnWidth: 100,
      },
      {
        type: ePropType.String,
        name: 'entityKey',
        displayName: 'FormManagement::FS.VersionDefinition.EntityKey',
        sortable: true,
        columnWidth: 100,
      },
      {
        type: ePropType.String,
        name: 'displayName',
        displayName:'FormManagement::FS.VersionDefinition.DisplayName',
        sortable: true,
        columnWidth: 100,
      },
]);
