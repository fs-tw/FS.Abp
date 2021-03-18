import { FormProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_GROUP_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'code',
        displayName: 'FormManagement::FS.Group.Code',
        id: 'code',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'parentid',
        displayName: 'FormManagement::FS.Group.ParentId',
        id: 'parentid',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'level',
        displayName: 'FormManagement::FS.Group.Level',
        id: 'level',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'displayname',
        displayName: 'FormManagement::FS.Group.DisplayName',
        id: 'displayname',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'formalid',
        displayName: 'FormManagement::FS.Group.FormalId',
        id: 'formalid',
        defaultValue: "",
    },
]);
//# sourceMappingURL=default-group-create-form-props.js.map