import { EntityProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_DOCUMENTDEFINITION_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.DocumentDefinition.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'displayname',
        displayName: 'FormManagement::FS.DocumentDefinition.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'currentversionid',
        displayName: 'FormManagement::FS.DocumentDefinition.CurrentVersionId',
        sortable: true,
        columnWidth: 100,
    }
]);
//# sourceMappingURL=default-documentdefinition-entity-props.js.map