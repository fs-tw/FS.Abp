import { EntityProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_WEBSITEDEFINITION_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'Theme::FS.WebSiteDefinition.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Theme::FS.WebSiteDefinition.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'description',
        displayName: 'Theme::FS.WebSiteDefinition.Description',
        sortable: true,
        columnWidth: 150,
    }
]);
//# sourceMappingURL=default-websitedefinition-entity-props.js.map