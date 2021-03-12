import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Fs } from 'libs/theme/proxy/src';
import { of } from 'rxjs';

export const DEFAULT_WEBSITEDEFINITION_ENTITY_PROPS = EntityProp.createMany<Fs.Theme.WebSites.Dtos.WebSiteDefinitionDto>([
   
    {
        type: ePropType.String,
        name: 'no',
        displayName: 'Theme::FS.WebSiteDefinition.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'displayName',
        displayName: 'Theme::FS.WebSiteDefinition.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'description',
        displayName: 'Theme::FS.WebSiteDefinition.Description',
        sortable: true,
        columnWidth: 150,
    }
]);
