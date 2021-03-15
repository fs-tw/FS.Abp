import { EntityProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_ROUTEDEFINITION_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'Theme::FS.RouteDefinition.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Theme::FS.RouteDefinition.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'description',
        displayName: 'Theme::FS.RouteDefinition.Description',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Theme::FS.RouteDefinition.Disable',
        sortable: true,
        columnWidth: 150,
    }
]);
//# sourceMappingURL=default-routedefinition-entity-props.js.map