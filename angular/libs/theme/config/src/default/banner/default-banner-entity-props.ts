import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import {Fs } from '@fs-tw/theme/proxy';
import { of } from 'rxjs';

export const DEFAULT_BANNER_ENTITY_PROPS = EntityProp.createMany<Fs.Theme.Banners.Dtos.BannerDto>([
   
    {
        type: ePropType.String,
        name: 'no',
        displayName: 'Theme::FS.Banner.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'displayName',
        displayName: 'Theme::FS.Banner.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'description',
        displayName: 'Theme::FS.Banner.Description',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'disable',
        displayName: 'Theme::FS.Banner.Disable',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'bannerconfig',
        displayName: 'Theme::FS.Banner.BannerConfig',
        sortable: true,
        columnWidth: 150,
    }
    ,
    {
        type: ePropType.String,
        name: 'bannerdefinitionid',
        displayName: 'Theme::FS.Banner.BannerDefinitionId',
        sortable: true,
        columnWidth: 150,
    }
]);
