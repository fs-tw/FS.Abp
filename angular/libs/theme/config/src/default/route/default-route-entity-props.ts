import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/theme/proxy';
import { of } from 'rxjs';

export const DEFAULT_ROUTE_ENTITY_PROPS = EntityProp.createMany<Fs.Theme.Routes.Dtos.RouteDto>([
   
    {
        type: ePropType.String,
        name: 'no',
        displayName: 'Theme::FS.Route.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'displayName',
        displayName: 'Theme::FS.Route.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'description',
        displayName: 'Theme::FS.Route.Description',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'disable',
        displayName: 'Theme::FS.Route.Disable',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'routeconfig',
        displayName: 'Theme::FS.Route.RouteConfig',
        sortable: true,
        columnWidth: 150,
    }
    ,
    {
        type: ePropType.String,
        name: 'routedefinitionid',
        displayName: 'Theme::FS.Route.RouteDefinitionId',
        sortable: true,
        columnWidth: 150,
    }
]);
