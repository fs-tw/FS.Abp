import { FormProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_TAG_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'Cms::FS.Tag.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Cms::FS.Tag.DisplayName',
        id: 'displayName',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'description',
        displayName: 'Cms::FS.Tag.Description',
        id: 'description',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Cms::FS.Tag.Disable',
        id: 'disable',
        defaultValue: "",
    },
]);
//# sourceMappingURL=default-tag-create-form-props.js.map