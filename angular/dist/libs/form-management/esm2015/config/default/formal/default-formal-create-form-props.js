import { FormProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_FORMAL_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.Formal.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'FormManagement::FS.Formal.DisplayName',
        id: 'displayName',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'versionid',
        displayName: 'FormManagement::FS.Formal.VersionId',
        id: 'versionid',
        defaultValue: "",
    }
]);
//# sourceMappingURL=default-formal-create-form-props.js.map