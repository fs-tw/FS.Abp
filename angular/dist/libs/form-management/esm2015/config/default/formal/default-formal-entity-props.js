import { EntityProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_FORMAL_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.Formal.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'FormManagement::FS.Formal.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'versionid',
        displayName: 'FormManagement::FS.Formal.VersionId',
        sortable: true,
        columnWidth: 150,
    },
]);
//# sourceMappingURL=default-formal-entity-props.js.map