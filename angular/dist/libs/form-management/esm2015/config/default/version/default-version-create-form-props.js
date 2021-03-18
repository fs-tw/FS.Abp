import { FormProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_VERSION_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.Version.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'prevversionid',
        displayName: 'FormManagement::FS.Version.PrevVersionId',
        id: 'prevversionid',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'nextversionid',
        displayName: 'FormManagement::FS.Version.NextVersionId',
        id: 'nextversionid',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'documentdefinitionid',
        displayName: 'FormManagement::FS.Version.DocumentDefinitionId',
        id: 'documentdefinitionid',
        defaultValue: "",
    },
]);
//# sourceMappingURL=default-version-create-form-props.js.map