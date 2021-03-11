import { FormProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_BLOG_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "number" /* Number */,
        name: 'sequence',
        displayName: 'Cms::FS.Blog.sequence',
        id: 'sequence',
        defaultValue: "",
    },
    //  {
    //   type: ePropType.String,
    //   name: 'no',
    //   displayName: 'Cms::FS.Blog.No',
    //   id: 'no',
    //   defaultValue: ""
    // },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Cms::FS.Blog.DisplayName',
        id: 'displayName',
        defaultValue: "",
    },
    {
        type: "text" /* Text */,
        name: 'description',
        displayName: 'Cms::FS.Blog.Description',
        id: 'description',
        defaultValue: "",
    },
    {
        type: "boolean" /* Boolean */,
        name: 'disable',
        displayName: 'Cms::FS.Blog.Disable',
        id: 'disable',
        defaultValue: false,
    },
    {
        type: "string" /* String */,
        name: 'url',
        displayName: 'Cms::FS.Blog.url',
        id: 'url',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'listStyle',
        displayName: 'Cms::FS.Blog.listStyle',
        id: 'listStyle',
        defaultValue: "",
    },
]);
//# sourceMappingURL=default-blog-create-form-props.js.map