import { EntityProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_ROUTE_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'Theme::FS.Route.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Theme::FS.Route.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'description',
        displayName: 'Theme::FS.Route.Description',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Theme::FS.Route.Disable',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'routeconfig',
        displayName: 'Theme::FS.Route.RouteConfig',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'routedefinitionid',
        displayName: 'Theme::FS.Route.RouteDefinitionId',
        sortable: true,
        columnWidth: 150,
    }
]);
//# sourceMappingURL=default-route-entity-props.js.map