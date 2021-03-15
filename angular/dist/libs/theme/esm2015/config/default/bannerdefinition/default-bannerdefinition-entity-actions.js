import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../services/extensions.service';
const ɵ0 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.BannerDefinition" /* BannerDefinition */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.BannerDefinition" /* BannerDefinition */, {
        name: 'Delete',
        record: data.record,
    });
};
export const DEFAULT_BANNERDEFINITION_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1,
    },
]);
export { ɵ0, ɵ1 };
//# sourceMappingURL=default-bannerdefinition-entity-actions.js.map