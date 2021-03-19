import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';
import { of } from 'rxjs';

export const DEFAULT_FORMAL_ENTITY_PROPS = EntityProp.createMany<Fs.FormManagement.Forms.Dtos.FormalDto>([
   
    {
        type: ePropType.String,
        name: 'no',
        displayName: 'FormManagement::FS.Formal.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'displayName',
        displayName: 'FormManagement::FS.Formal.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'versionid',
        displayName: 'FormManagement::FS.Formal.VersionId',
        sortable: true,
        columnWidth: 150,
    },
  
]);
