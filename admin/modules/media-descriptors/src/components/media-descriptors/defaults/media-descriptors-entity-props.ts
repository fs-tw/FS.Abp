import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const MEDIA_DESCRIPTORS_ENTITY_PROPS = EntityProp.createMany<Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto>([
    {
        type: ePropType.String,
        name: 'name',
        displayName: 'CmsKit::Nsme',
        sortable: true,
        columnWidth: 90,
    },
    {
        type: ePropType.String,
        name: 'mimeType',
        displayName: 'CmsKit::MimeType',
        sortable: true,
        columnWidth: 90,
    },
    {
        type: ePropType.Number,
        name: 'size',
        displayName: 'CmsKit::Size',
        sortable: true,
        columnWidth: 90,
    },
]);