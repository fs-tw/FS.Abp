import { FormProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_BANNER_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'Theme::FS.Banner.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Theme::FS.Banner.DisplayName',
        id: 'displayName',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'description',
        displayName: 'Theme::FS.Banner.Description',
        id: 'description',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Theme::FS.Banner.Disable',
        id: 'disable',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'bannerconfig',
        displayName: 'Theme::FS.Banner.BannerConfig',
        id: 'bannerconfig',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'bannerdefinitionid',
        displayName: 'Theme::FS.Banner.BannerDefinitionId',
        id: 'bannerdefinitionid',
        defaultValue: "",
    },
]);
//# sourceMappingURL=default-banner-create-form-props.js.map