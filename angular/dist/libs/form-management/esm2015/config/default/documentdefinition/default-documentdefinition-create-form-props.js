import { FormProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_DOCUMENTDEFINITION_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.DocumentDefinition.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'displayname',
        displayName: 'FormManagement::FS.DocumentDefinition.DisplayName',
        id: 'displayname',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'currentversionid',
        displayName: 'FormManagement::FS.DocumentDefinition.CurrentVersionId',
        id: 'currentversionid',
        defaultValue: "",
    }
]);
//# sourceMappingURL=default-documentdefinition-create-form-props.js.map