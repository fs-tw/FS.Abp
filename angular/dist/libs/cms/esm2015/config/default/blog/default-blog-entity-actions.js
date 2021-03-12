import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../services/extensions.service';
export const DEFAULT_BLOG_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: (data) => {
            const service = data.getInjected(ExtensionsService);
            service.action("Cms::FS.Cms.Blogs" /* Blog */, {
                name: 'Edit',
                record: data.record,
            });
        },
    },
    {
        text: 'AbpIdentity::Delete',
        action: (data) => {
            const service = data.getInjected(ExtensionsService);
            service.action("Cms::FS.Cms.Blogs" /* Blog */, {
                name: 'Delete',
                record: data.record,
            });
        },
    },
]);
//# sourceMappingURL=default-blog-entity-actions.js.map