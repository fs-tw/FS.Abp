import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';
import { of } from 'rxjs';

export const DEFAULT_RECORD_ENTITY_PROPS = EntityProp.createMany<Fs.FormManagement.Records.Dtos.RecordDto>([
     
      {
        type: ePropType.String,
        name: 'formalid',
        displayName: 'FormManagement::FS.Record.FormalId',
        sortable: true,
        columnWidth: 100,
      },
]);
