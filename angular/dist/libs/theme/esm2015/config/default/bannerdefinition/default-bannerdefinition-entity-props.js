import { EntityProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_BANNERDEFINITION_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'Theme::FS.BannerDefinition.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Theme::FS.BannerDefinition.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'description',
        displayName: 'Theme::FS.BannerDefinition.Description',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Theme::FS.BannerDefinition.Disable',
        sortable: true,
        columnWidth: 150,
    }
]);
//# sourceMappingURL=default-bannerdefinition-entity-props.js.map