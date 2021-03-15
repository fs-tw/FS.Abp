import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/theme/proxy';
import { of } from 'rxjs';

export const DEFAULT_BANNERDEFINITION_ENTITY_PROPS = EntityProp.createMany<Fs.Theme.Banners.Dtos.BannerDefinitionDto>([
   
    {
        type: ePropType.String,
        name: 'no',
        displayName: 'Theme::FS.BannerDefinition.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'displayName',
        displayName: 'Theme::FS.BannerDefinition.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: ePropType.String,
        name: 'description',
        displayName: 'Theme::FS.BannerDefinition.Description',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: ePropType.String,
        name: 'disable',
        displayName: 'Theme::FS.BannerDefinition.Disable',
        sortable: true,
        columnWidth: 150,
    }
]);
