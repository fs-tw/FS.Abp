import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../services/extensions.service';
export const DEFAULT_POST_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: (data) => {
            const service = data.getInjected(ExtensionsService);
            service.action("Cms::FS.Cms.PostManagement" /* Post */, {
                name: 'Edit',
                record: data.record,
            });
        },
    },
    {
        text: 'AbpIdentity::Delete',
        action: (data) => {
            const service = data.getInjected(ExtensionsService);
            service.action("Cms::FS.Cms.PostManagement" /* Post */, {
                name: 'Delete',
                record: data.record,
            });
        },
    },
]);
//# sourceMappingURL=default-post-entity-actions.js.map