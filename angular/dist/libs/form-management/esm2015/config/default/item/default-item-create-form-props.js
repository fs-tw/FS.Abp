import { FormProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_ITEM_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.Item.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'question',
        displayName: 'FormManagement::FS.Item.Question',
        id: 'question',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'groupid',
        displayName: 'FormManagement::FS.Item.GroupId',
        id: 'groupid',
        defaultValue: "",
    }
]);
//# sourceMappingURL=default-item-create-form-props.js.map