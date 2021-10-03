import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';

export const ATTACH_MENTMEDIA_ENTITY_PROPS = EntityProp.createMany<Fs.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaDto>([
    {
        type: ePropType.String,
        name: 'entityType',
        displayName: 'CmsKit::EntityType',
        sortable: true,
        columnWidth: 90,
    },
    {
        type: ePropType.String,
        name: 'entityId',
        displayName: 'CmsKit::EntityId',
        sortable: true,
        columnWidth: 90,
    },
    {
        type: ePropType.String,
        name: 'mediaDescriptorId',
        displayName: 'CmsKit::MediaDescriptorId',
        sortable: true,
        columnWidth: 90,
    },
]);