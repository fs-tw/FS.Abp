import { EntityProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_GROUP_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'code',
        displayName: 'FormManagement::FS.Group.Code',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'parentid',
        displayName: 'FormManagement::FS.Group.ParentId',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'level',
        displayName: 'FormManagement::FS.Group.Level',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'displayname',
        displayName: 'FormManagement::FS.Group.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'formalid',
        displayName: 'FormManagement::FS.Group.FormalId',
        sortable: true,
        columnWidth: 100,
    },
]);
//# sourceMappingURL=default-group-entity-props.js.map