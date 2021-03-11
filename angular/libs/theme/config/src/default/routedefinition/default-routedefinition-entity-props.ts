import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import {  } from 'libs/theme/proxy/src';
import { of } from 'rxjs';

export const DEFAULT_ROUTEDEFINITION_ENTITY_PROPS = EntityProp.createMany<Fs.Cms.Blogs.Dtos.BlogDto>([
   
    {
        type: ePropType.String,
        name: 'no',
        displayName: 'Theme::FS.RouteDefinition.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'displayName',
        displayName: 'Theme::FS.RouteDefinition.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'description',
        displayName: 'Theme::FS.RouteDefinition.Description',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'disable',
        displayName: 'Theme::FS.RouteDefinition.Disable',
        sortable: true,
        columnWidth: 150,
    }
]);
