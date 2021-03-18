import { EntityProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_ITEM_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.Item.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'question',
        displayName: 'FormManagement::FS.Item.Question',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'groupid',
        displayName: 'FormManagement::FS.Item.GroupId',
        sortable: true,
        columnWidth: 100,
    }
]);
//# sourceMappingURL=default-item-entity-props.js.map