import { FormProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_ROUTEDEFINITION_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'Theme::FS.RouteDefinition.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Theme::FS.RouteDefinition.DisplayName',
        id: 'displayName',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'description',
        displayName: 'Theme::FS.RouteDefinition.Description',
        id: 'description',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Theme::FS.RouteDefinition.Disable',
        id: 'disable',
        defaultValue: "",
    }
]);
//# sourceMappingURL=default-routedefinition-create-form-props.js.map