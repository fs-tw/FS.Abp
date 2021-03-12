import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../services/extensions.service';
export const DEFAULT_TAG_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: data => {
            const service = data.getInjected(ExtensionsService);
            service.action("\u6A19\u7C64\u7DAD\u8B77" /* Tag */, {
                name: 'Add'
            });
            //const component = data.getInjected(UsersComponent);
            //component.add();
        },
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);
//# sourceMappingURL=default-tag-toolbar-actions.js.map