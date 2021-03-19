import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';
import { of } from 'rxjs';

export const DEFAULT_DOCUMENTDEFINITION_ENTITY_PROPS = EntityProp.createMany<Fs.FormManagement.Documents.Dtos.DocumentDefinitionDto>([

      {
        type: ePropType.String,
        name: 'no',
        displayName: 'FormManagement::FS.DocumentDefinition.No',
        sortable: true,
        columnWidth: 100,
      },
      {
        type: ePropType.String,
        name: 'displayname',
        displayName: 'FormManagement::FS.DocumentDefinition.DisplayName',
        sortable: true,
        columnWidth: 100,
      },
      {
        type: ePropType.String,
        name: 'currentversionid',
        displayName:'FormManagement::FS.DocumentDefinition.CurrentVersionId',
        sortable: true,
        columnWidth: 100,
      }
]);
