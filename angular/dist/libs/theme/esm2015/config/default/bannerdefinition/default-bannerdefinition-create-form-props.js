import { FormProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_BANNERDEFINITION_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'Theme::FS.BannerDefinition.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Theme::FS.BannerDefinition.DisplayName',
        id: 'displayName',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'description',
        displayName: 'Theme::FS.BannerDefinition.Description',
        id: 'description',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Theme::FS.BannerDefinition.Disable',
        id: 'disable',
        defaultValue: "",
    }
]);
//# sourceMappingURL=default-bannerdefinition-create-form-props.js.map