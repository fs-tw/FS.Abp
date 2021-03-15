import { EntityProp } from '@abp/ng.theme.shared/extensions';
export const DEFAULT_BANNER_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'Theme::FS.Banner.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Theme::FS.Banner.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'description',
        displayName: 'Theme::FS.Banner.Description',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Theme::FS.Banner.Disable',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'bannerconfig',
        displayName: 'Theme::FS.Banner.BannerConfig',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'bannerdefinitionid',
        displayName: 'Theme::FS.Banner.BannerDefinitionId',
        sortable: true,
        columnWidth: 150,
    }
]);
//# sourceMappingURL=default-banner-entity-props.js.map