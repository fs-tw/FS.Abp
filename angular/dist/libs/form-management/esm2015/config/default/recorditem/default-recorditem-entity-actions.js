import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../services/extensions.service';
const ɵ0 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.RecordItem" /* RecordItem */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.RecordItem" /* RecordItem */, {
        name: 'Delete',
        record: data.record,
    });
};
export const DEFAULT_RECORDITEM_ENTITY_ACTIONS = EntityAction.createMany([
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
//# sourceMappingURL=default-recorditem-entity-actions.js.map