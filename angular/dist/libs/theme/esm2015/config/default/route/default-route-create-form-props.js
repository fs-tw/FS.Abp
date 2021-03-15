import { FormProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_ROUTE_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'Theme::FS.Route.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Theme::FS.Route.DisplayName',
        id: 'displayName',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'description',
        displayName: 'Theme::FS.Route.Description',
        id: 'description',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Theme::FS.Route.Disable',
        id: 'disable',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'routeconfig',
        displayName: 'Theme::FS.Route.RouteConfig',
        id: 'routeconfig',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'routedefinitionid',
        displayName: 'Theme::FS.Route.RouteDefinitionId',
        id: 'routedefinitionid',
        defaultValue: "",
    },
]);
//# sourceMappingURL=default-route-create-form-props.js.map