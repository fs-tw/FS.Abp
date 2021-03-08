import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import {  } from 'libs/theme/proxy/src';
import { of } from 'rxjs';

export const DEFAULT_WEBSITEDEFINITION_ENTITY_PROPS = EntityProp.createMany<Fs.Cms.Blogs.Dtos.BlogDto>([
   
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
