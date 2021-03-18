import { EntityProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_VERSION_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.Version.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'prevversionid',
        displayName: 'FormManagement::FS.Version.PrevVersionId',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'nextversionid',
        displayName: 'FormManagement::FS.Version.NextVersionId',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'documentdefinitionid',
        displayName: 'FormManagement::FS.Version.DocumentDefinitionId',
        sortable: true,
        columnWidth: 100,
    },
]);
//# sourceMappingURL=default-version-entity-props.js.map