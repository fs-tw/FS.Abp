import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../services/extensions.service';
export const DEFAULT_TAG_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: (data) => {
            const service = data.getInjected(ExtensionsService);
            service.action("\u6A19\u7C64\u7DAD\u8B77" /* Tag */, {
                name: 'Edit',
                record: data.record,
            });
        },
    },
    {
        text: 'AbpIdentity::Delete',
        action: (data) => {
            const service = data.getInjected(ExtensionsService);
            service.action("\u6A19\u7C64\u7DAD\u8B77" /* Tag */, {
                name: 'Delete',
                record: data.record,
            });
        },
    },
]);
//# sourceMappingURL=default-tag-entity-actions.js.map